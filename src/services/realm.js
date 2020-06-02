import Realm from 'realm';
import ProductSchema from '~/schemas/ProductSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ProductSchema],
    deleteRealmIfMigrationNeeded: true,
  });
}
