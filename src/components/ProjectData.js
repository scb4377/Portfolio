import bug from "../images/bug/bug.png"
import bank from "../images/bank.png"
import pb from "../images/pb.png"
import crypto from "../images/crypto.png"

const ProjectData =
    [
        {
            "id": 1,
            "projectTitle": "Bug Tracker",
            "details": "MERN CRUD application for project management issues. Application uses authentication and is connected to a backend server and database.",
            "image": bug,
            "technologies": [
                "MONGO",
                "EXPRESS",
                "REACT",
                "NODE",
                "MUI",

            ],
            "demoLink": "https://project-manager-bug-tracker.herokuapp.com/",
            "sourceLink": "https://github.com/sblevins-dev/bugTracker"
        },
        {
            "id": 2,
            "projectTitle": "Ozark Bank",
            "details": "GUI Application built with Java. Logging in pulls the user's account information from a MySQL database. Banking system that allows a user to make deposits and withdrawals on their account.",
            "image": bank,
            "technologies": [
                "JAVA",
                "SQL"
            ],
            "demoLink": null,
            "sourceLink": "https://github.com/sblevins-dev/BankingSystem"
        },
        {
            "id": 3,
            "projectTitle": "Powerball Statistics",
            "details": "Powerball past winning combinations pulled from Data.gov. Application calculates the most occurring PowerBall combinations. User can create a combination that has never landed.",
            "image": pb,
            "technologies": [
                "REACT",
            ],
            "demoLink": "https://sblevins-dev.github.io/PowerballApp/",
            "sourceLink": "https://github.com/sblevins-dev/PowerballApp"
        },
        {
            "id": 4,
            "projectTitle": "Stock Viewer",
            "details": "Crypto-currency tracker using React and Coin-Gecko API. Coins that you are interested in can be added to your session watchlist.",
            "image": crypto,
            "technologies": [
                "EXPRESS",
                "REACT",
                "NODE"
            ],
            "demoLink": "https://sblevins-dev.github.io/CryptoTracker/",
            "sourceLink": "https://github.com/sblevins-dev/CryptoTracker"
        }
    ]

export default ProjectData

