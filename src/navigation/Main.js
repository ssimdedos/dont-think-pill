import React, { memo } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import SvgNotification from "@svgs/SvgNotification";
import SvgSetting from "@svgs/SvgSetting";
import SvgMap from "@svgs/SvgMap";
import SvgBookMark from "@svgs/SvgBookMark";
import SvgCalendar from "@svgs/SvgCalendar";
import SvgMyHeart from "@svgs/DoctorInformation/SvgMyHeart";
import SvgAdd from "@svgs/SvgAdd";
import SvgSearch from "@svgs/SvgSearch";
import ROUTES from "@utils/routes";
import HeaderTitle from "@components/HeaderTittle";
import ButtonHeader from "@components/ButtonHeader";
import HeaderBackGround from "@components/HeaderBackGround";
import WalkThrough from "@screens/WalkThrough";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import ForgotPassword from "@screens/ForgotPassword";
import ResetPassword from "@screens/ResetPassword";
import ResetPasswordSuccess from "@screens/ResetPasswordSuccess";
import VerifyEmail from "@screens/VerifyEmail";
import VerifyMobile from "@screens/VerifyMobie";
import CreateAccount from "@screens/CreateAccount";
import FullName from "@screens/FullName";
import Gender from "@screens/Gender";
import BirthDay from "@screens/BirthDay";
import Weight from "@screens/Weight";
import Height from "@screens/Height";
import Blood from "@screens/Blood";
import PricePlan from "@screens/PricePlan";
import Menu from "@screens/Menu";
import AppointmentList from "@screens/AppointmentList";
import AppointmentCalendar from "@screens/AppointmentCalendar";
import BookAppointment from "@screens/BookAppointment";
import AppointmentDetails from "@screens/AppointmentDetails";
import IndicatorsSettingsTab from "@navigation/IndicatorsSettingsTab";
import InputTestIndicators from "@screens/InputTestIndicators";
import SetGoal from "@screens/SetGoal";
import MapsDoctors from "@screens/MapsDoctors";
import DoctorProfile from "@screens/DoctorProfile";
import DoctorInformation from "@screens/DoctorInformation";
import DoctorAddress from "@screens/DoctorAddress";
import DoctorReview from "@screens/DoctorReview";
import GoalSettings from "@screens/GoalSettings";
import NewsTab from "@navigation/NewsTab";
import NewsBookmark from "@screens/NewsBookmark";
import FindDoctors from "@screens/FindDoctors";
import ResultFindDoctor from "@screens/ResultFindDoctor";
import AddDrugs from "@screens/AddDrugs";
import DrugDetails from "@screens/DrugDetails";
import DrugShop from "@screens/DrugShop";
import DrugShopDetails from "@screens/DrugShopDetails";
import NewsComment from "@screens/NewsComment";
import Cart from "@screens/Cart";
import Billing from "@screens/Billing";
import Insurance from "@screens/Insurance";
import ListDrugs from "@screens/ListDrugs";
import FindHospital from "@screens/FindHospital";
import CreateAppointment from "@screens/CreateAppointment";
import Services from "@screens/Services";
import DashBoard from "@screens/DashBoard";
import DoctorMessage from "@screens/DoctorMessage";
import NewsDetails from "@screens/NewDetails";
import VideoCall from "@screens/VideoCall";
import CallDoctor from "@screens/CallDoctor";
import Notification from "@screens/Notification";
import DrawerNavigator from "@navigation/DrawerNavigator";
import SvgDelete from "@svgs/ForgotPassword/SvgDelete";
import useCachedResources from "@hooks/useCachedResources";

const Main = memo(() => {
  const fontsLoaded = useCachedResources();

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={"screen"}
        initialRouteName={ROUTES.WalkThrough}
      >
        <Stack.Screen
          name={ROUTES.WalkThrough}
          component={WalkThrough}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.DrawerNavigator}
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SignIn}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SignUp}
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ForgotPassword}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ResetPassword}
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ResetPasswordSuccess}
          component={ResetPasswordSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.VerifyEmail}
          component={VerifyEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.VerifyMobile}
          component={VerifyMobile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CreatAccount}
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Notification}
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.DoctorMessage}
          component={DoctorMessage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.NewsDetails}
          component={NewsDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.VideoCall}
          component={VideoCall}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CallDoctor}
          component={CallDoctor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Menu}
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.AppointmentCalendar}
          component={AppointmentCalendar}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title="AppointmentCalendar" />,
            headerLeft: () => <ButtonHeader children={<SvgDelete />} />,
            headerBackground: () => <HeaderBackGround border={false} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DoctorProfile}
          component={DoctorProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Services}
          component={Services}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Services"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DashBoard}
          component={DashBoard}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"DashBoard"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.FullName}
          component={FullName}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Fullname"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Gender}
          component={Gender}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Your Gender"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.BirthDay}
          component={BirthDay}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Your Birthday"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Weight}
          component={Weight}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Your Weight"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Height}
          component={Height}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Your Height"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Blood}
          component={Blood}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Blood"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.AppointmentList}
          component={AppointmentList}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Appoinment"} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader
                children={<SvgCalendar />}
                onPress={() => {
                  navigation.navigate(ROUTES.AppointmentCalendar);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.IndicatorsSettings}
          component={IndicatorsSettingsTab}
          options={() => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Settings"} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgSetting />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.News}
          component={NewsTab}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"News Healthy"} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader
                children={<SvgBookMark />}
                onPress={() => {
                  navigation.navigate(ROUTES.NewsBookmark);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.CreateAppointment}
          component={CreateAppointment}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Create Appointment"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.InputTestIndicators}
          component={InputTestIndicators}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Weight"} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgSetting />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.SetGoal}
          component={SetGoal}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Goal Weight"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DoctorInformation}
          component={DoctorInformation}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Doctor Information"} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgMyHeart />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DoctorAddress}
          component={DoctorAddress}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Working Address"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DoctorReview}
          component={DoctorReview}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Review"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.NewsBookmark}
          component={NewsBookmark}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Bookmarks"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.GoalSettings}
          component={GoalSettings}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Goals Settings"} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgSetting />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          }}
        />

        <Stack.Screen
          name={ROUTES.AppointmentDetails}
          component={AppointmentDetails}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Appointment Details"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.BookAppointment}
          component={BookAppointment}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Book Appoinment"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.FindDoctors}
          component={FindDoctors}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Find Doctors"} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.ResultFindDoctor}
          component={ResultFindDoctor}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Result"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgMap />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.AddDrugs}
          component={AddDrugs}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Add Drugs"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.DrugDetails}
          component={DrugDetails}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Drug Details"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.DrugShop}
          component={DrugShop}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Drugs Shop"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.DrugShopDetails}
          component={DrugShopDetails}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Shop Details"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.NewsComment}
          component={NewsComment}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Comments"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Cart}
          component={Cart}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Shopping Cart"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Billing}
          component={Billing}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Billing"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgMap />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.MapsDoctors}
          component={MapsDoctors}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Maps"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgMap />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Insurance}
          component={Insurance}
          options={({}) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Insurance"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgSearch />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.ListDrugs}
          component={ListDrugs}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Pills Library"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                children={<SvgAdd />}
                onPress={() => {
                  navigation.navigate(ROUTES.AddDrugs);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.FindHospital}
          component={FindHospital}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Find Hospital"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.PricePlan}
          component={PricePlan}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerTitle: () => <HeaderTitle title={"Choose your Plan"} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                left={true}
                children={<SvgNotification />}
                onPress={() => {
                  navigation.navigate(ROUTES.Notification);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Main;
