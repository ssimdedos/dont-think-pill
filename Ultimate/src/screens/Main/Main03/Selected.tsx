import * as React from "react";
import { VStack, Text } from "components";
import { useStyleSheet, StyleService, Icon } from "@ui-kitten/components";
import { useToggle } from "hooks";
import { TouchableOpacity, View } from "react-native";

const Selected = () => {
  const styles = useStyleSheet(themedStyles);
  const [selected, setSelected] = React.useState(0);

  const [show, toggle] = useToggle(false);
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text category="h5">{options[selected]}</Text>
        <Icon
          pack="assets"
          name="caret-down"
          style={[styles.icon, show && { transform: [{ rotate: "180deg" }] }]}
        />
      </TouchableOpacity>
      {show && (
        <VStack style={styles.dropdown}>
          {options.map((opt, index) => {
            return (
              <VStack
                key={index}
                onPress={() => {
                  setSelected(index);
                  toggle();
                }}
              >
                <Text category="h5">{opt}</Text>
              </VStack>
            );
          })}
        </VStack>
      )}
    </View>
  );
};
export default Selected;
const themedStyles = StyleService.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    borderColor: "transparent",
    alignSelf: "flex-start",
    marginLeft: 16,
    zIndex: 1000,
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: "white",
    marginTop: 3,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderColor: "color-basic-1000",
    zIndex: 1000,
    marginTop: 12,
    alignSelf: "flex-start",
    marginLeft: 16,
  },
});

const options = ["Today", "This Week", "This Month", "This Year"];
