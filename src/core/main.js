import React, { Fragment } from 'react';

const Main = ({ tab, ux, naviList }) => {
  const naviItem = [];

  naviList.map((item, index) => {
    naviItem.push({
      id: item,
      name: item,
      tab: index,
      enabled: null,
    });
    return naviItem;
  });

  return (
    <>
      <div className={ux.classNameWizardProgress}>
        {naviItem.map((nav, index) => {
          return (
            <div
              className={`${ux.classNameWizardStep} ${
                nav.tab < tab ? ux.classNameWizardComplete : ''
              }${nav.tab === tab ? ux.classNameWizardInProgress : ''}`}
              key={nav.id}
            >
              {nav.name}
              <div className={ux.classNameWizardStepNode}>{index + 1}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
