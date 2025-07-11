import Navbar from '/src/components/navbar/NavBar';
import Introduction from '/src/layout/introductionLayout';
import Wave from '/src/components/wave/Wave';
import Project from '/src/layout/ProjectLayout';
import TechStack from '/src/layout/TechStackLayout';
import Contact from '/src/layout/ContactLayout';
import Footer from '/src/components/footer/Footer';

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Wave />
            <Project />
            <TechStack />
            <Contact />
            <Footer />
        </div>
    );
};