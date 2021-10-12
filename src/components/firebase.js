import app from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'
import database from 'firebase';



const config = {
	apiKey: "AIzaSyAXfwp45qDnLaqDdJmE-oLyNpSi_sbrOxU",
    authDomain: "contact-list-d7810.firebaseapp.com",
    databaseURL: "https://contact-list-d7810-default-rtdb.firebaseio.com",
    projectId: "contact-list-d7810",
    storageBucket: "gs://contact-list-d7810.appspot.com/",
    messagingSenderId: "566246548730",
    appId: "1:566246548730:web:10ae4e5cf7707f1f8fd543",
    measurementId: "G-XD0QFJKR8H"
}

// Create a storage reference from our storage service



class Firebase {
	
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	};

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}
	// async Push( instrumentals_file,exclusive,nonExclusive){
	// 	database.ref("user").set({
	// 		instrumentals_file : instrumentals_file,
	// 		exclusive: exclusive,
	// 		nonEclusive: nonExclusive
	// 	 }).catch(alert);
	// }
	async register(UserName, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: UserName
		})
	}

	addBio(bio) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			bio
		})
	}
	addProfilPic(ProfilePic) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}
		return this.db.doc(`users_codedamn_videp/${this.auth.currentUser.uid}`).set({
			ProfilePic
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
		const bio = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return bio.get('bio')
	}

	async getProfilePic() {
		const profilePic = await this.db.doc(`users_codedamn_video/${this.authcurrentUser.uid}`).get()
		return profilePic.get('profilePic')
	}
	
}


export default new Firebase()