import { Store } from 'vuex'
import { Room, User } from '@/interface';

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        rooms: Room[],
        users: User[],
        session: object
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}