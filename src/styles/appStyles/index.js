import { StyleSheet } from 'react-native';
import AppColors from "../../utils/AppColors/AppColors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: AppColors.white,
    },
    item: {
      padding: 15,
      marginBottom: 10,
      backgroundColor: AppColors.white,
      borderRadius: 5,
      shadowColor: AppColors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    itemText: {
      fontSize: 16,
      color: '#333',
    },
    button: {
      backgroundColor: AppColors.downyBackground,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginVertical: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: AppColors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
  });
