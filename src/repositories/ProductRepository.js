import getRealm from '~/services/realm';

export default class ProductRepository {
  static async generateId(model, schema) {
    const realm = await getRealm();

    const lastData = realm.objects(`${schema}`).sorted('id', true)[0];
    const highestId = lastData == null ? 0 : lastData.id;

    return highestId == null ? 1 : highestId + 1;
  }

  static async create(model, schema) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(schema, model);
    });
  }

  static async update(model, schema) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(`${schema}`, model, 'modified');
    });
  }

  static async deleteById(id, schema) {
    const realm = await getRealm();
    realm.write(() => {
      let data = realm.objects(`${schema}`);
      realm.delete(data.filtered(`id = ${id}`));
    });
  }

  static async fetch(schema) {
    const realm = await getRealm();
    return realm.objects(`${schema}`);
  }
}
