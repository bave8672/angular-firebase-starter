import { FirebaseAppConfig } from 'angularfire2';

export interface IEnvironmentConfig {
    production: boolean;
    firebaseConfig: FirebaseAppConfig;
}
