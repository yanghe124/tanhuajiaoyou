import React, { Component } from 'react'
import { Text, View, touchableO } from 'react-native'
import { pxToDp } from '../../../utils/stylesKits';
import SvgUri from "react-native-svg-uri";
import { male, female } from '../../../res/fonts/iconSvg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from "react-native-elements"
import DatePicker from "react-native-datepicker"
export default class index extends Component {
    state = {
        // 昵称
        nickname: "",
        // 性别 
        gender: "男",
        // 生日
        birthday: "",
        // 城市
        city: "",
        // 头像
        header: "",
        // 经度
        lng: "",
        // 纬度
        lat: "",
        // 详细的地址
        address: ""
    }
    //选择性别
    chooeseGender = (gender) => {
        this.setState({ gender });
    }
    render() {
        const { gender, nickname, birthday } = this.state;
        const dateNow = new Date();
        const currentDate = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: pxToDp(30) }}>
                {/* 1.0 标题 开始*/}
                <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: "bold" }}>填写资料</Text>
                <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: "bold" }}>提升我的魅力</Text>
                {/* 1.0 标题 结束*/}
                {/* 2.0 性别 开始 */}
                <View style={{ marginTop: pxToDp(20) }}>
                    <View style={{ justifyContent: "space-around", width: "60%", flexDirection: "row", alignSelf: "center" }}>
                        <TouchableOpacity onPress={this.chooeseGender.bind(this, "男")} style={{ width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30), backgroundColor: gender === "男" ? "red" : "#eee", justifyContent: "center", alignItems: "center" }}>
                            <SvgUri svgXmlData={male} width="34" height="34" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.chooeseGender.bind(this, "女")} style={{ width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30), backgroundColor: gender === "女" ? "red" : "#eee", justifyContent: "center", alignItems: "center" }}>
                            <SvgUri svgXmlData={female} width="34" height="34" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 2.0 性别 结束 */}
                {/* 3.0 昵称 开始*/}
                <View>
                    <Input
                        value={nickname}
                        placeholder="设置昵称"
                        onChangeText={(nickname) => this.setState({ nickname })}
                    />
                </View>
                {/* 3.0 昵称 结束*/}
                {/* 4.0 日期 开始 */}
                <View>
                    <DatePicker
                        androidMode="spinner"
                        style={{ width: "100%" }}
                        date={birthday}
                        mode="date"
                        placeholder="设置生日"
                        format="YYYY-MM-DD"
                        minDate="1900-01-01"
                        maxDate={currentDate}
                        confirmBtnText="确定"
                        cancelBtnText="取消"
                        customStyles={{
                            dateIcon: {
                                display: "none"
                            },
                            dateInput: {
                                marginLeft: pxToDp(10),
                                borderWidth: 0,
                                borderBottomWidth: pxToDp(1.1),
                                alignItems: "flex-start",
                                paddingLeft: pxToDp(4)
                            },
                            placeholderText: {
                                fontSize: pxToDp(18),
                                color: "#afafaf"
                            }
                        }}
                        onDateChange={(birthday) => { this.setState({ birthday }) }}
                    />
                </View>
                {/* 4.0 日期 结束 */}
            </View>
        )
    }
}
