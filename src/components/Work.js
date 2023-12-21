import "./WorkStyles.css";
import WorkData from "./WorkData";

function Work(){
    return(
        <div className="work">
            
            <div className="workcard">
                <WorkData
                image="./assets/wd.jpg"
                heading="Web Development"
                text="We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development."
                />

<WorkData
                image="./assets/ai.jpg"
                heading="Artificial Intelligence"
                text="Demaze Technologies offers the best AI development services per the client's requirements. We are experienced in AI development, Natural language processing, computer vision and deep learning to create accurate apps."
                />

<WorkData
                image="./assets/gd.jpg"
                heading="Graphic Designing"
                text="At Demaze, We offer graphic design solutions to businesses of all types like brochures, branding banners, social media posts, creative portfolios, logos and brand identity designs."
                />
            </div>
        </div>
    );
};
export default Work;