import { StyleSheet } from "react-native";

export const signIn = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 20,
    rowGap: 10,
    justifyContent: "space-between",
    paddingTop: 10
  },
  intro: {
    rowGap: 10
  },
  heading: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center"
  },
  text: {
    fontSize: 17,
    textAlign: "center"
  },
  form: {
    rowGap: 15,
    paddingTop: 50
  },
  formItem: {
    backgroundColor: "#F5FBFF",
    flexDirection: "row",
    columnGap: 20,
    borderRadius: 12,
    paddingHorizontal: 20,
    overflow: "scroll",
    // opacity: 0.1,
    paddingVertical: 15
  },
  formInput: {
    opacity: 1
  },
  footerFunctionalities: {
    rowGap: 15,
    alignItems: "center"
  },
  accountFunctionalisties: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
});
