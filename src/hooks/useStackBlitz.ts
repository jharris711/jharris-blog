import { useEffect, useState } from 'react';
import sdk, { EmbedOptions, VM } from '@stackblitz/sdk';

const useStackBlitz = (elId: string, projId: string, options: EmbedOptions) => {
  const [vmInstance, setVMInstance] = useState<VM>();

  useEffect(() => {
    const embedProject = async () => {
      const res = await sdk.embedProjectId(elId, projId, options);
      setVMInstance(res);
    };
    embedProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { vmInstance };
};

export default useStackBlitz;
