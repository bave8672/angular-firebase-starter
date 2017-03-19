import { FirebaseAppConfig } from 'angularfire2/interfaces';

export interface IEnvironmentConfig {
    production: boolean;
    firebaseConfig: FirebaseAppConfig;
}
