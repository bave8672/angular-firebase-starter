import { AuthProviders } from 'angularfire2/auth';
import { AngularFire } from 'angularfire2';

export namespace UserSelectors {

    export const IsPasswordUser = (firebase: AngularFire) =>
        firebase.auth.map(auth => !!auth && auth.provider === AuthProviders.Password);
}
