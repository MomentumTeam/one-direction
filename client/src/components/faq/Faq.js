import React from 'react';
import { Collapse, Typography } from 'antd';
import styles from "./Faq.module.css";

const { Panel } = Collapse;
const { Text, Title } = Typography;


const answer = (
    <p className={styles.answer} >
        חג הוא יום שבו ציין אירוע משמח בעל משמעות היסטורית, דתית, לאומית וכדומה, באמצעות טקסים, חגיגות, תפילות ומנהגים שונים, על פי מנהג או על פי החוק.בדרך כלל פעולות שגרתיות כגון עסקים, עבודה ולימודים מושהים או מצטמצמים ביום זה.
        לכל אחת מהדתות יש חגים משלה ובנוסף לכך יש בכל מדינה חגים לאומיים המשותפים לאזרחיה בני כל הדתות.
        בשונה מן החגים שהם ימי שמחה, יש בדתות ובמדינות שונות גם ימי זיכרון ואבל.כמו כן ישנם ימים מיוחדים המציינים דבר מה כגון יום האם ויום האשה.
    </p >
);


function Faq() {

    return (
        <div className={styles.fatherDiv}>
            <Title level={2}>שאלות ותשובות FAQ</Title>

            <Collapse  defaultActiveKey={['1']} className={styles.collapse}
                // ghost
                // bordered={false}
                expandIcon={({ isActive }) =>
                (isActive ? <img
                    src={process.env.PUBLIC_URL + "/img/faq/down.png"}
                    alt="close"
                /> : <img
                        src={process.env.PUBLIC_URL + "/img/faq/left.png"}
                        alt="expand"
                    />)}

            >


                <div className={styles.faqTitlesDiv}>
                    <img src={process.env.PUBLIC_URL + "/img/faq/mail.png"} />
                    <Text strong={true} className={styles.faqTitles}>דוא"ל</Text>
                </div>

                <Panel key="1"  header="איך אדע שלא פספסתי מיילים במעבר לרשת האחת? " className={styles.faqPanel}>
                    {answer}
                </Panel>

                <Panel key="2" header="כיצד ניגשים למייל ברשת האחת?" className={styles.faqPanel}>
                    <p className={styles.answer}>
                        בלחיצה על החץ מצד ימין התשובה נפתחת כאן.....
                    </p>
                </Panel>



                <div className={styles.faqTitlesDiv}>
                    <img src={process.env.PUBLIC_URL + "/img/faq/shares.png"} />
                    <Text strong={true} className={styles.faqTitles}>תיקיות שיתוף</Text>
                </div>

                <Panel key="3" header="כמה ספציפיים צריכים להיות הניתובים שאני מעביר לכם? האם תיקיית האב מספיקה?" className={styles.faqPanel}>
                    {answer}
                </Panel>



                <div className={styles.faqTitlesDiv}>
                    <img src={process.env.PUBLIC_URL + "/img/faq/me.png"} />
                    <Text strong={true} className={styles.faqTitles}>פרטים אישיים</Text>
                </div>

                <Panel key="4" header="כיצד ניתן לדעת מה שם המחשב שלי?" className={styles.faqPanel}>
                    {answer}
                </Panel>



                <div className={styles.faqTitlesDiv}>
                    <img src={process.env.PUBLIC_URL + "/img/faq/folders.png"} />
                    <Text strong={true} className={styles.faqTitles}>תיקיות מעבר</Text>
                </div>

                <Panel key="5" header="אני בחופש בתאריך המעבר שלי, מה ניתן לעשות?" className={styles.faqPanel}>
                    {answer}
                </Panel>

            </Collapse>
        </div>
    )
}

export default Faq;
