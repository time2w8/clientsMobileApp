import React, { FC, useState } from "react";
import { View, Text, Image, ToastAndroid, ActivityIndicator } from "react-native";
import { Container, InputForm } from "../../components";
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../common/constants";
import { APP_ICON } from "../../../assets";
import DatePicker from 'react-native-date-picker';
import { Formik } from 'formik';
import { Client } from "../../common/types";
import { clientApi } from "../../api";

interface IScreenProps {
    navigation: StackNavigationProp<any>;
    route: any;
}

const Main: FC<IScreenProps> = (props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const submitClient = (values: Client, { resetForm }: any) => {
        if (!values.name || !values.lastname || !values.birthdate) {
            ToastAndroid.show('Complete todos los campos', ToastAndroid.SHORT);
        } else {
            setLoading(true);
            clientApi.saveClient(values).then((response) => {
                if (response) {
                    ToastAndroid.show('El Cliente fue agregado con éxito', ToastAndroid.SHORT);
                    resetForm();
                    setLoading(false);
                }
            }).catch((error) => {
                if (error) {
                    console.log(error);
                    setLoading(false);
                }
            })
            resetForm();
        }
    }

    return (
        <>
            <Container containerStyle={{ justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
                <View style={{ width: '80%' }}>
                    <View style={{ alignSelf: "center" }}>
                        <Image style={{ tintColor: 'black' }} source={APP_ICON} />
                    </View>
                    <View style={{ marginVertical: 30 }}>
                        <Formik
                            initialValues={{ name: '', lastname: '', birthdate: new Date() }}
                            onSubmit={submitClient}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
                                <View>
                                    <InputForm
                                        containerStyle={{ backgroundColor: 'white', width: '80%', alignSelf: 'center', marginVertical: 15 }}
                                        icon='lock'
                                        label='Nombre'
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                    />

                                    <InputForm
                                        containerStyle={{ backgroundColor: 'white', width: '80%', alignSelf: 'center', marginVertical: 15 }}
                                        icon='lock'
                                        label='Apellido'
                                        value={values.lastname}
                                        onChangeText={handleChange('lastname')}
                                        onBlur={handleBlur('lastname')}
                                    />

                                    <View style={{ alignSelf: 'center', width: '80%', marginVertical: 15 }}>
                                        <Text style={{ color: colors.TEXT_COLOR, marginBottom: 5 }}>
                                            Fecha de Nacimiento:
                                        </Text>
                                        <DatePicker
                                            date={values.birthdate}
                                            onDateChange={(date) => { values.birthdate = date; }}
                                            mode="date"
                                            maximumDate={new Date()}
                                            minimumDate={new Date(1900, 0, 1)}
                                        />
                                    </View>
                                    <View style={{ alignSelf: "center", width: '100%', alignItems: "center", paddingHorizontal: '10%', marginVertical: 25 }}>
                                        <TouchableOpacity disabled={loading} onPress={handleSubmit} style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }} containerStyle={{ width: '100%', backgroundColor: colors.MAIN_COLOR }}>
                                            {loading && (
                                                <View style={{ paddingVertical: 10, marginRight: 10 }}>
                                                    <ActivityIndicator size="small" color="white" />
                                                </View>
                                            )}
                                            <Text style={{ alignSelf: "center", fontSize: 20, paddingVertical: 10, color: 'white' }}>Registrar Cliente</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </Container>

        </>
    )
}

export default Main;