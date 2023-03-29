// // ModulesPage.js

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { fetchModules } from '../actions/moduleActions';

// const modules = [
//     {
//         id: 1,
//         title: 'Topic',
//         content: '',
//         type: 'book',
//         active: true,
//     },
//     {
//         id: 2,
//         title: 'Quiz',
//         content: '',
//         type: 'book',
//         active: false,
//     },
//     {
//         id: 3,
//         title: 'Assignment',
//         content: '',
//         type: 'book',
//         active: false,
//     }
// ]
// const ModulesPage = ({ module, fetchModules }) => {
//   useEffect(() => {
//     fetchModules();
//   }, [fetchModules]);

//   return (
//     <>
//     <div className="header">
//             <h1>Data Scientist Program</h1>
//             <nav>
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/modules">Modules</a></li>
//                     <li><a href="/instructors">Instructors</a></li>
//                 </ul>
//             </nav>
//         </div>
//     <div className="module-page">
//         <div className="sidebar">
//             <ul>
//                 {/* hardcoded on modules array as i didn't have an api to work with, tried to setup json server but returning on same server clashes hence used a hardcoded modules array
//                 to work with api just replace 'module' with modules when an active api is answering the responses and change the link on get api (moduleActions.js) to the respective one */}
//                 {modules.map((module) => (
//                 <li key={module.id} className={module.active ? 'active' : ''}>
//                     <a href='#'>
//                     <i className={`fa fa-${module.type} icon`}></i>
//                     {module.title}
//                     </a>
//                 </li>
//             ))}
//             </ul>
//         </div>
//         <div className="content">
//             {modules.map((module) =>
//             module.active ? (
//                 <div key={module.id}>
//                 <h2>{module.title}</h2>
//                 <p>{module.content}</p>
//                 </div>
//             ) : null
//             )}
//         </div>
//     </div>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//     modules: state.modules.items,
//     loading: state.modules.loading,   
//     hasErrors: state.modules.hasErrors,
// });

// export default connect(mapStateToProps, { fetchModules })(ModulesPage);

import React, { useState } from 'react';

const modules = [
    {
        id: 1,
        title: 'Topic',
        content: 'This is the topic content',
        type: 'book',
        active: true,
    },
    {
        id: 2,
        title: 'Quiz',
        content: 'This is the quiz content',
        type: 'book',
        active: false,
    },
    {
        id: 3,
        title: 'Assignment',
        content: 'This is the assignment content',
        type: 'book',
        active: false,
    }
];

const ModulesPage = () => {
  const [activeModule, setActiveModule] = useState(modules[0]);

  const handleModuleClick = (module) => {
    setActiveModule(module);
  }

  return (
    <>
      <div className="header">
        <h1>Data Scientist Program</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/modules">Modules</a></li>
            <li><a href="/instructors">Instructors</a></li>
          </ul>
        </nav>
      </div>
      <div className="module-page">
        <div className="sidebar">
          <ul>
            {modules.map((module) => (
              <li key={module.id} className={module.active ? 'active' : ''}>
                <a href="#" onClick={() => handleModuleClick(module)}>
                  <i className={`fa fa-${module.type} icon`}></i>
                  {module.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <h2>{activeModule.title}</h2>
          <p>{activeModule.content}</p>
        </div>
      </div>
    </>
  );
};

export default ModulesPage;
