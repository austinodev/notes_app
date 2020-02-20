import React from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import posed from "react-native-pose";

const TabBarComponent = props => {
    const {width} = Dimensions.get("window");
    const tabWidth = width / 4;
    const SpotLight = posed.View({
        route0: { x: tabWidth / 2},
        route1: { x: tabWidth * 2.5 },
    });
    const style = StyleSheet.create({
        spotlight: {
            width: tabWidth,
            height: 10,
            backgroundColor: "rgba(128,128,255,0.2)",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
        },
        scaler: { flex: 1, alignItems: "center", justifyContent: "center" },
        container: { flexDirection: "row", height: 52, elevation: 2, alignItems: "center" },
        tabButton: { flex: 1 }
    });
    const Scaler = posed.View({
        active: { scale: 1 },
        inactive: { scale: 1 }
    });

    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation,
    } = props;
    const { routes, index: activeRouteIndex } = navigation.state;
    return (
        <View style={style.container}>
            <View style={StyleSheet.absoluteFill}>
                <SpotLight style={style.spotlight} pose={`route${activeRouteIndex}`} />
            </View>
            {
                routes.map((route, routeIndex) => {
                    const isRouteActive = routeIndex === activeRouteIndex;
                    const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                    return (
                        <TouchableOpacity
                            key={routeIndex}
                            style={style.tabButton}
                            onPress={() => {
                                onTabPress({ route })
                            }}
                            onLongPress={() => {
                                onTabLongPress({ route })
                            }}
                            accessibilityLabel={getAccessibilityLabel({ route })}
                        >
                            <Scaler
                                pose={isRouteActive ? "active" : "inactive"}
                                style={style.scaler}
                            >
                                <Text>{getLabelText({ route })}</Text>
                            </Scaler>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
};

export default TabBarComponent;
