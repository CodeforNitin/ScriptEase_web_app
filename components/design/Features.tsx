import { Titillium_Web } from "next/font/google";
import Feature from "./Feature";



const features = [
    {
        title: 'Integrations Ecosystem',
        description: 'Enhance your productivity by connecting with people, keeping your essential in one place.'

    },
    {
        title: 'Goal Setting and Tracking',
        description: 'Define and track your goals, breaking down objectives into achievable targets to keep your targets in sight.'
    },
    {
        title: 'Share an invite to work together',
        description: 'Secured environment where only allowed members can view/edit the docs '
    }
]



const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-8">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">
          Enjoy customizable editor, team work tool and smart tracking
          ActiveCollaborators in one place, Set tasks, get reminders, and see
          your progress simply and quickly.
        </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
            {features.map(({title, description})=>(
              <Feature title={title} description={description} key={title}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
