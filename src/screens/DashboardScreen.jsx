import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { getProfile, uploadAvatar } from '../services/profileService';
import { profileActions } from '../store/profileSlice';

import WelcomeMessage from "../components/dashboard/WelcomeMessage";
import BoxSection from "../components/dashboard/BoxSection";

const DashboardScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProfile();
      dispatch(profileActions.updateProfile(response?.data));

      if(response.data.avatar){
        dispatch(profileActions.updateAvatar(`${response?.data?.url}${response?.data?.avatar}`));
      }
    }

    fetchData();
  }, []);

  return(
    <LinearGradient colors={['#000000', '#212A3E']} className="flex-1 justify-center">
      <WelcomeMessage />
      <BoxSection />
      <StatusBar style="light" />
    </LinearGradient>
  )
}

export default DashboardScreen;
