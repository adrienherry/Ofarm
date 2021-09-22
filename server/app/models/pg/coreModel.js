const db = require("../../services/pgPool");

class CoreModel {
	constructor(obj) {
		this.id = obj.id;
	}

	static async findAll() {
		try {
			const { rows } = await db.query(`SELECT * FROM "${this.viewName}"`);
			return rows;
		} catch (error) {
			return { error: error.message };
		}
	}

	static async findById(id) {
		try {
			const { rows } = await db.query(
				`SELECT * FROM "${this.viewName}" WHERE id=$1`,
				[id],
			);

			if (!rows[0]) return null;

			return rows[0];
		} catch (error) {
			return { error: error.message };
		}
	}

	async save() {
		try {
			const queryObj = Object.keys(this).reduce((obj, key) => {
				if (key !== "id" && key !== "created_at" && key !== "updated_at")
					obj[key] = this[key];
				return obj;
			}, {});

			const keys = Object.keys(queryObj);
			const values = Object.values(queryObj);
			const params = values.map((_, index) => `$${index + 1}`).join(", ");

			if (this.id) {
				const { rows } = await db.query(
					`UPDATE "${this.constructor.tableName}" SET (${keys}, updated_at)=(${params}, now()) WHERE id=${this.id} RETURNING *`,
					values,
				);

				for (const propName in rows[0]) {
					this[propName] = rows[0][propName];
				}

				return rows[0];
			} else {
				const { rows } = await db.query(
					`INSERT INTO "${this.constructor.tableName}" (${keys}) VALUES (${params}) RETURNING *`,
					values,
				);

				for (const propName in this) {
					this[propName] = rows[0][propName];
				}

				return rows[0];
			}
		} catch (error) {
			return { error: error.message };
		}
	}

	async delete() {
		if (!this.id)
			return { error: "Object must have a valid ID to be deleted!" };
		try {
			const { rows } = await db.query(
				`DELETE FROM "${this.constructor.tableName}" WHERE id=$1 RETURNING *`,
				[this.id],
			);
			return rows.length;
		} catch (error) {
			return { error: error.message };
		}
	}
}

module.exports = CoreModel;
