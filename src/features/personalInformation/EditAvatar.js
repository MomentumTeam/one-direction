import { Upload, message, Row, Col, Avatar, Form, Button } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./PersonalInformation.module.css";
import Title from "antd/lib/typography/Title";

export const EditAvatar = () => {
  const [imageUrl, setImageUrl] = useState(
    process.env.PUBLIC_URL + "/img/avatar.png"
  );
  const [loading, setLoading] = useState(false);

  const normFile = (e) => {
    return e && e.fileList;
  };

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  return (
    <Col span={12}>
      <Row justify="end">
        <Avatar
          style={{ marginLeft: "1%" }}
          size={70}
          src={<img src={imageUrl} alt="avatar" className={styles.avatarImg} />}
        />
        <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="avatar"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            maxCount={1}
          >
            <Button
              type="primary"
              // size="large"
              // className={styles.uploadButton}
              loading={loading}
              style={{
                direction: "ltr",
                marginTop: "20px",
              }}
              icon={
                <img
                  src={process.env.PUBLIC_URL + "/img/cam.png"}
                  style={{ padding: "0px 10% 0px 0px" }}
                  alt=""
                />
              }
            >
              שינוי תמונה
            </Button>
          </Upload>
        </Form.Item>
      </Row>
    </Col>
  );
};
