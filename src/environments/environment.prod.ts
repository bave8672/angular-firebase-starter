import { FirebaseConfig } from '../app/firebase/firebase.config';
import { IEnvironmentConfig } from './environment.d';

export const environment: IEnvironmentConfig = {
    production: true,
    firebaseConfig: FirebaseConfig
};
