import { Stack } from "@react-native-material/core"
import { SafeAreaView, ScrollView, Text } from "react-native"
import { styles } from "../styles/Theme"


export default TeskScreen =()=>{
    return(
        <SafeAreaView>
            <ScrollView>
                <Stack spacing={2} style={styles.margin16}>
                    <Text style={styles.title1}>TASK</Text>
                </Stack>
            </ScrollView>
        </SafeAreaView>
    )
}