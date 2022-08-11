import { useState } from 'react';
import { deleteHitService, updateHitService } from '../services/hits.services';

const useHitComponent = (
  hitId: number,
  description_hit: string,
  name_target: string,
  statusId: number
) => {
  const [description, setDescription] = useState(description_hit);
  const [target, setTarget] = useState(name_target);
  const [statusData, setStatus] = useState(statusId);
  const [updateHit, setUpdateHit] = useState(false);
  const sendUpdateHit = async () => {
    try {
      const data = await updateHitService({
        id: hitId,
        description,
        nameTarget: target,
        status: statusData,
      });
    } catch (notifyError) {
      console.error('ERROR SEND DATA => ', notifyError);
    }
  };

  const sendDeleteHit = async () => {
    try {
      await deleteHitService(hitId);
    } catch (notifyError) {
      console.error('ERROR SEND DATA => ', notifyError);
    }
  };
  return {
    sendUpdateHit,
    setDescription,
    setTarget,
    setStatus,
    setUpdateHit,
    updateHit,
    description,
    target,
    statusData,
    sendDeleteHit,
  };
};

export default useHitComponent;
