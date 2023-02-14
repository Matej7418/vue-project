import { Store } from 'vuex'
import { Room, User, Session } from '@/interface';

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        rooms: Room[],
        users: User[],
        session: Session
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}