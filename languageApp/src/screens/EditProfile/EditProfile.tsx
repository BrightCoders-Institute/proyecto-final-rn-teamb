import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface UserProfile {
    name: string;
    email: string;
    bio: string;
}

const EditProfile: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Hello, I am John Doe!',
    });

    const handleLogout = () => {
        // Implement your logout logic here
    };

    const handleDeleteAccount = () => {
        // Implement your delete account logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.containerEditProfileTitle}>
                <Text style={styles.editProfileTitle}>Edit Profile</Text>
            </Text>


            <View style={styles.pfpContainer}>
                <View style={styles.pfpBackground}>
                    {/* Replace the source with the actual profile picture */}
                    {/* <Image source={require('path/to/your/image')} style={styles.profilePicture} /> */}
                </View>
                <View style={styles.pfpLabels}>
                    <Text style={styles.pfpLabel}>Username</Text>
                    <Text style={styles.pfpLabelText}>{userProfile.name}</Text>
                    <Text style={styles.pfpLabel}>Name</Text>
                    <Text style={styles.pfpLabelText}>{userProfile.name}</Text>
                </View>
            </View>

            <Text style={styles.label}>Change Username</Text>
            <TextInput
                style={styles.input}
                value={userProfile.name}
                onChangeText={(text) => setUserProfile({ ...userProfile, name: text })}
            />

            <Text style={styles.label}>Change Password</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setUserProfile({ ...userProfile, password: text })}
            />

            <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeleteAccount}>
                <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.bottomBarButton}>
                    <Icon name="folder" size={25} color="#fff" />
                    <Text style={styles.bottomBarText}>Resources</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton}>
                    <Icon name="home" size={25} color="#fff" />
                    <Text style={styles.bottomBarText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton}>
                    <Icon name="settings" size={25} color="#fff" />
                    <Text style={styles.bottomBarText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',

    },

    editProfileTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center', // Center the title horizontally
        marginBottom: 20,
    },
    pfpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    pfpBackground: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#04BFAD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    profilePicture: {
        width: '100%',
        height: '100%',
    },
    pfpLabels: {
        marginLeft: 20,
    },
    pfpLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    pfpLabelText: {
        fontSize: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
    },
    button: {
        backgroundColor: '#7C0000',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#7C0000',
    },
    deleteButton: {
        backgroundColor: '#7C0000',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#012030',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    bottomBarButton: {
        alignItems: 'center',
    },
    bottomBarText: {
        color: '#fff',
        marginTop: 5,
    },
});

export default EditProfile;
