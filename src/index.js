import React, { useEffect, useState } from 'react';
import '~/config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';

import Routes from '~/routes';
import { isSignedIn } from '~/services/auth';

export default function App() {
  const [signed, setSigned] = useState();

  useEffect(() => {
    (async function () {
      const signed = await isSignedIn();
      setSigned(signed);
    })();
  }, []);

  return (
    <NavigationContainer>
      <Routes signedIn={signed} />
    </NavigationContainer>
  );
}
