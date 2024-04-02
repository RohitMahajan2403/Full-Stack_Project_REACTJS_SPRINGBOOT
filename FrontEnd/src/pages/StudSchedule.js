import React from 'react'
import { Link, Route } from 'react-router-dom'
import './StudSchedule.css';

const handleLanguageLinkClick = (externalLink) => {
    window.location.href = externalLink; // Redirect to the external link
};

const StudSchedule = () => {
    return (
        <div className='bgimage'>
        <div className='page-container' >
            <h1 className='heading' >Exam Links</h1>
                <table className='language-table'>
                    <thead>
                        <tr>
                            <th>Language Name</th>
                            <th>Language Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>English</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://www.ieltsidpindia.com/information/international-english-language-exam-tests-registration/?')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>Korean</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://iigvietnam.com/topik/')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>Spanish</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://www.dele.org/')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>Italian</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://www.italyeducation.info/tests/higher-education-tests/certification-of-italian-as-a-foreign-language-exam-in-italy.html#:~:text=The%20Certification%20of%20Italian%20as,competence%2C%20from%20Beginners%20to%20Advanced.')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>Japanese</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://www.jlpt.jp/e/')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>Chinese</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://chinaeducenter.com/en/exams')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>German</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://www.goethe.de/ins/de/en/prf/prf.html')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>Russian</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://testingcenter.spbu.ru/en/exams/russian/torfl.html')} to="#">To Exam</Link></td>
                        </tr>
                        <tr>
                            <td>French</td>
                            <td><Link onClick={() => handleLanguageLinkClick('https://www.careerguide.com/career/exams/delf-exam-pattern-fee-date-eligibility-syllabus#:~:text=Who%20is%20eligible%20for%20DELF,old%20can%20take%20the%20test')} to="#">To Exam</Link></td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
       
    )
}

export default StudSchedule
