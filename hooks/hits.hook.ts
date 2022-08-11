import { getAllUsers, getHitmans } from './../services/users.services';
import { useEffect, useState } from 'react';
import { getAllHitService, createHitService } from '../services/hits.services';

const useHit = (userRole: number, userId: number) => {
  const [description, setDescription] = useState('');
  const [nameTarget, setNameTarget] = useState('');
  const [userAssigned, setUserAssigned] = useState('');
  const [hits, setHits] = useState([]);
  const [activeCreateHit, setActiveCreateHit] = useState(false);
  const [hitmans, setHitmans] = useState([]);

  useEffect(() => {
    const getHits = async () => {
      try {
        let hitmans = [];
        if (userRole === 1) {
          hitmans = await getAllUsers();
        } else if (userRole === 2) {
          hitmans = await getHitmans(userId);
        }
        setHitmans(hitmans);
        const data = await getAllHitService();
        setHits(data);
      } catch (notifyError) {
        console.error('ERROR SEND DATA => ', notifyError);
      }
    };
    getHits();
  }, []);

  const sendCreateHit = async () => {
    try {
      await createHitService({
        description,
        nameTarget,
        userAssigned,
        userCreator: userId,
      });
      setActiveCreateHit(false);
      const dataHits = await getAllHitService();
      setHits(dataHits);
    } catch (notifyError) {
      console.error('ERROR SEND DATA => ', notifyError);
    }
  };

  return {
    hitmans,
    sendCreateHit,
    setDescription,
    setNameTarget,
    setUserAssigned,
    setActiveCreateHit,
    activeCreateHit,
    hits,
  };
};

export default useHit;
