import React, { memo, useCallback, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import FONTS from "@utils/fonts/index";
import SvgImage from "@svgs/DoctorMessge/SvgImage";
import SvgVideo from "@svgs/SvgVideo";
import SvgInformation from "@svgs/DoctorMessge/SvgInformation";
import SvgBackArrow from "@svgs/SvgBackArrow";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import {
  Bubble,
  Composer,
  GiftedChat,
  InputToolbar,
  Message,
  MessageText,
  Send,
} from "react-native-gifted-chat";
import { widthScreen } from "@utils/dimensions";
import SvgOption from "@svgs/SvgOption";
import SvgSmile from "@svgs/DoctorMessge/SvgSmile";
import SvgSend from "@svgs/DoctorMessge/SvgSend";
import SvgAttach from "@svgs/DoctorMessge/SvgAttach";
import ROUTES from "@utils/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MESSAGE_DATA = {
  imgDoctor: require("@assets/ResultFindDoctor/01.png"),
  doctorName: "Dr. Ann Carlson",
  specialized: "Cardiologist",
  rating: "5.0",
  location: "Newyork, United States",
  numberImage: "12",
};

const DoctorMessage = memo(({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [messageData, setMessageData] = useState(MESSAGE_DATA);
  const [messages, setMessages] = useState([]);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onImage = useCallback(() => {}, []);

  const onVideoCall = useCallback(() => {
    navigation.navigate(ROUTES.VideoCall);
  }, [navigation]);

  const onInformation = useCallback(() => {}, []);

  const onOption = useCallback(() => {}, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Cellulite Treatment Options",
        createdAt: new Date(Date.UTC(2019, 10, 4)),
        user: {
          _id: 1,
        },
      },
      {
        _id: 2,
        text: "Laser Eye Surgery Risks Flap Dislocation After Lasik",
        createdAt: new Date(Date.UTC(2019, 9, 4)),

        user: {
          _id: 2,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderMessage = (props) => {
    return (
      <View style={{ paddingBottom: 24 }}>
        <Message {...props} />
      </View>
    );
  };

  const renderMessageText = (props) => {
    return (
      <MessageText
        {...props}
        textStyle={{
          left: {
            fontFamily: FONTS.HIND.Regular,
            fontSize: 16,
            lineHeight: 24,
            color: colors.dimGray,
          },
          right: {
            fontFamily: FONTS.HIND.Regular,
            fontSize: 16,
            lineHeight: 24,
            color: colors.white,
          },
        }}
        {...props}
      />
    );
  };

  const renderComposer = (props) => {
    return (
      <View {...props} style={styles.composerView}>
        <TouchableOpacity style={styles.svgSmile}>
          <SvgSmile />
        </TouchableOpacity>
        <Composer
          textInputStyle={styles.textInputStyle}
          placeholderTextColor={colors.dimGray}
          {...props}
        />
        <TouchableOpacity style={styles.svgSmile}>
          <SvgAttach />
        </TouchableOpacity>
        <Send {...props} containerStyle={styles.sendView}>
          <SvgSend />
        </Send>
      </View>
    );
  };

  const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={styles.containerStyle} />;
  };

  const renderBubble = (props) => {
    let sameUserInPrevMessage = false;
    if (
      props.previousMessage.user !== undefined &&
      props.previousMessage.user
    ) {
      props.previousMessage.user._id === props.currentMessage.user._id
        ? (sameUserInPrevMessage = true)
        : (sameUserInPrevMessage = false);
    }

    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            marginRight: 12,
            backgroundColor: colors.classicBlue,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 1,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            paddingVertical: 4,
            paddingLeft: 24,
          },
          left: {
            backgroundColor: colors.white,
            borderTopLeftRadius: 1,
            borderTopRightRadius: 16,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            paddingVertical: 4,
            paddingRight: 24,
            marginLeft: 24,
          },
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: top + 12 }]}>
        <Image source={messageData.imgDoctor} style={styles.imgDoctor} />
        <Text style={styles.doctorName}>{messageData.doctorName}</Text>
        <View style={styles.btmHeader}>
          <TouchableOpacity onPress={onImage} activeOpacity={0.7}>
            <SvgImage />
            <View style={styles.numberImgView}>
              <Text style={styles.txtNumber}>{messageData.numberImage}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onVideoCall} activeOpacity={0.7}>
            <SvgVideo color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onInformation} activeOpacity={0.7}>
            <SvgInformation />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onGoBack}
          activeOpacity={0.6}
          style={styles.backView}
        >
          <SvgBackArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onOption}
          activeOpacity={0.6}
          style={styles.optionView}
        >
          <SvgOption color={colors.white} />
        </TouchableOpacity>
      </View>

      {Platform.OS === "android" ? (
        <GiftedChat
          user={{ _id: 1 }}
          placeholder={"Type a messages…"}
          alwaysShowSend={true}
          messages={messages}
          onSend={(message) => onSend(message)}
          scrollToBottom={false}
          renderMessage={(props) => renderMessage(props)}
          renderMessageText={(props) => renderMessageText(props)}
          renderSend={(props) => null}
          showUserAvatar={false}
          renderAvatar={null}
          renderInputToolbar={(props) => renderInputToolbar(props)}
          renderBubble={(props) => renderBubble(props)}
        />
      ) : (
        <View style={styles.iosView}>
          <GiftedChat
            user={{ _id: 1 }}
            placeholder={"Type a messages…"}
            alwaysShowSend={true}
            isCustomViewBottom={true}
            messages={messages}
            onSend={(message) => onSend(message)}
            renderMessage={(props) => renderMessage(props)}
            renderMessageText={(props) => renderMessageText(props)}
            showUserAvatar={false}
            renderAvatar={null}
            alignTop={true}
            renderComposer={(props) => renderComposer(props)}
            renderSend={(props) => null}
            renderBubble={(props) => renderBubble(props)}
            renderInputToolbar={(props) => renderInputToolbar(props)}
            bottomOffset={12}
            quickReplyStyle={styles.quickReplyStyle}
          />
        </View>
      )}
    </View>
  );
});

export default DoctorMessage;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  header: {
    backgroundColor: colors.classicBlue,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingBottom: 22,
  },
  imgDoctor: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 25,
    alignSelf: "center",
  },
  doctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "center",
    marginTop: 8,
    color: colors.white,
  },
  btmHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    marginTop: 20,
  },
  numberImgView: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.oldBurgundy,
    position: "absolute",
    right: -14,
    top: -10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtNumber: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 12,
    lineHeight: 18,
    color: colors.white,
    fontWeight: "600",
  },
  backView: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: Platform.OS ? getStatusBarHeight() + 16 : 16,
  },
  optionView: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: Platform.OS ? getStatusBarHeight() + 16 : 16,
  },
  composerView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.white,
    width: widthScreen,
  },
  svgSmile: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  sendView: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 18,
    color: colors.dimGray,
    marginTop: 15,
  },
  containerStyle: {
    bottom: 0,
    marginBottom: -40,
    height: 100,
    flex: 1,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    borderTopWidth: 0,
    backgroundColor: colors.white,
  },
  quickReplyStyle: {
    paddingHorizontal: 24,
    height: 48,
    marginLeft: 12,
    borderRadius: 24,
    backgroundColor: colors.platinum,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iosView: {
    flex: 1,
    paddingBottom: 24,
  },
  txtQuickReplay: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 17,
    textAlign: "center",
    color: colors.semiBlack,
  },
  quickReplyView: {
    width: widthScreen,
    position: "absolute",
    bottom: 110,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
});
