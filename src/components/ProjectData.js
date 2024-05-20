import bug from "../images/bug/bugHome.png"
import bank from "../images/bank.png"
import pb from "../images/pb.png"
import crypto from "../images/crypto2.png"
import suite from "../images/suite.png"

const ProjectData =
    [
        {
            "id": 5,
            "projectTitle": "Hotel Booking",
            "details": "Built using React for the frontend and Java Spring for the backend, leverages the Booking.com API to deliver a seamless user experience. Users can search for hotels, view detailed listings, check real-time availability, and compare competitive rates, all through an intuitive and responsive interface. The integration with Booking.com ensures access to a vast database of accommodations, offering users a comprehensive selection tailored to their preferences and needs.",
            "image": suite,
            "technologies": [
                "REACT",
                "JAVA",
            ],
            "demoLink": "https://github.com/sblevins-dev/suite-spot-client",
            "sourceLink": "https://sblevins-dev.github.io/suite-spot-client/"
        },
        {
            "id": 1,
            "projectTitle": "Project Manager",
            "details": "MERN (MongoDB, Express.js, React.js, Node.js) stack application. This comprehensive solution offers CRUD capabilities for managing projects and issues efficiently. It features user authentication for secure access control and is seamlessly integrated with a backend server and MongoDB database. Enhance collaboration and productivity with real-time issue tracking and modern project management tools.",
            "image": bug,
            "technologies": [
                "MONGO",
                "EXPRESS",
                "REACT",
                "NODE",
                "MUI",

            ],
            "demoLink": "https://project-manager-bug-tracker.herokuapp.com/",
            "sourceLink": "https://github.com/sblevins-dev/project-manager"
        },
        // {
        //     "id": 2,
        //     "projectTitle": "Bank GUI",
        //     "details": "Upon logging in, users' account information is retrieved from a MySQL database, ensuring personalized access. Intuitive interface allows users to make deposits and withdrawals seamlessly, providing real-time updates to account balances. Enjoy hassle-free banking with robust database integration and responsive graphical user interface (GUI) design. ",
        //     "image": bank,
        //     "technologies": [
        //         "JAVA",
        //         "SQL"
        //     ],
        //     "demoLink": null,
        //     "sourceLink": "https://github.com/sblevins-dev/BankingSystem"
        // },
        {
            "id": 3,
            "projectTitle": "Powerball Statistics",
            "details": "Explore past Powerball winning combinations with my ReactJS application powered by Data.gov. Quickly access historical data and analyze the most frequent Powerball number combinations. This interactive tool allows users to generate new combinations that have never appeared in past draws, providing unique insights and strategies for future play. Discover winning patterns and create custom combinations for your next Powerball ticket. Empower your lottery strategy with our intuitive and data-driven Powerball Winning Combinations Analyzer.",
            "image": pb,
            "technologies": [
                "REACT",
            ],
            "demoLink": "https://sblevins-dev.github.io/PowerballApp/",
            "sourceLink": "https://github.com/sblevins-dev/PowerballApp"
        },
        {
            "id": 4,
            "projectTitle": "Crypto Coin Viewer",
            "details": "Track crypto-currencies effortlessly with this React-based application integrated with the CoinGecko API. Easily manage your favorite coins by adding them to your session-based watchlist. Stay informed about crypto market trends. Take control of your crypto investments with our intuitive Crypto-Currency Watchlist Tracker and make informed decisions on the go.",
            "image": crypto,
            "technologies": [
                "EXPRESS",
                "REACT",
                "NODE"
            ],
            "demoLink": "https://sblevins-dev.github.io/CryptoTracker/",
            "sourceLink": "https://github.com/sblevins-dev/CryptoTracker"
        },
        
    ]

export default ProjectData

