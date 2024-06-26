import bug from "../images/bug/bugHome.png"
import pb from "../images/pb.png"
import suite from "../images/suite.png"
import guitar from "../images/guitar.png"

const ProjectData =
    [
        {
            "id": 2,
            "projectTitle": "Guitar-Shop",
            "details": "Guitar Haven is a personal e-commerce project built using the Next.js framework, ensuring a fast and seamless user experience. The site features a dynamic catalog of guitars and accessories, leveraging server-side rendering for optimal performance.",
            "image": guitar,
            "technologies": [
                "Nex.js"
            ],
            "demoLink": "https://sblevins-dev.github.io/GuitarShop/",
            "sourceLink": "https://github.com/sblevins-dev/GuitarShop"
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
        {
            "id": 5,
            "projectTitle": "Hotel Booking",
            "details": "Built using React for the frontend and Java Spring for the backend, leverages the Booking.com API to deliver a seamless user experience. Users can search for hotels, view detailed listings, check real-time availability, and compare competitive rates, all through an intuitive and responsive interface. The integration with Booking.com ensures access to a vast database of accommodations, offering users a comprehensive selection tailored to their preferences and needs.",
            "image": suite,
            "technologies": [
                "REACT",
                "JAVA",
            ],
            "sourceLink": "https://github.com/sblevins-dev/suite-spot-client",
            "demoLink": "https://sblevins-dev.github.io/suite-spot-client/"
        },
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

    ]

export default ProjectData

