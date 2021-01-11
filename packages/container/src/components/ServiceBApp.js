import { mount } from 'service_b/ServiceBApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ setSomeState, someState }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({pathname: nextPathname}) => {        
        const {pathname}=history.location;

        if (pathname !== nextPathname){
          history.push(nextPathname);
        }        
      },
      setSomeState,
      someState

    });

    history.listen(onParentNavigate);

  }, [someState]);

  return <div ref={ref} />;
};
