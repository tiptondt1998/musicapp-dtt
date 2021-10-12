import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAXfwp45qDnLaqDdJmE-oLyNpSi_sbrOxU",
    authDomain: "contact-list-d7810.firebaseapp.com",
    databaseURL: "https://contact-list-d7810-default-rtdb.firebaseio.com",
    projectId: "contact-list-d7810",
    storageBucket: "contact-list-d7810.appspot.com",
    messagingSenderId: "566246548730",
    appId: "1:566246548730:web:10ae4e5cf7707f1f8fd543",
    measurementId: "G-XD0QFJKR8H"
}

class Firebase {
	
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
		this.storage = firebase.app().storage("https://console.firebase.google.com/project/contact-list-d7810/storage/contact-list-d7810.appspot.com/files");
		var storage = firebase.app().storage("https://console.firebase.google.com/project/contact-list-d7810/storage/contact-list-d7810.appspot.com/files");
	}


	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addBio(Bio) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			Bio
		})
	}

	addProfilePic(profilePic) {
		if(!this.auth.currentUser) {
			return alert('not loggin in');
		}
		return this.storage.ref(`images/`).set({
			profilePic
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserBio() {
		const Bio = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return Bio.get('Bio')
	}
}

export default new Firebase();