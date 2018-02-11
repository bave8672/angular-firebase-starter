import { FirebaseAuth } from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';

export namespace UserSelectors {

    export const IsPasswordUser = (auth: AngularFireAuth) =>
        auth.authState.map(auth => !!auth && auth.providerId === 'password');
}
