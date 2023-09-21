import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/userSlice';
import Table from './Table';

const Dashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <h2>Dashboard</h2>
      <Table data={userData} />
    </div>
  );
};

export default Dashboard;
