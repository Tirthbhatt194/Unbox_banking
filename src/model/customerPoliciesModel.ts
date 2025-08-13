import { DataTypes } from "sequelize";
import db from "../config";
import policyModel from "./policiesModel";

const customerPoliciesModel = db.define(
    "customerPolicies",
    {
        policyNumber: {
            type: DataTypes.NUMBER
        },
        policyStartDate: {
            type: DataTypes.DATE
        },
        policyEndDate: {
            type: DataTypes.DATE
        },
        paymentType: {
            type: DataTypes.ENUM("month", "quaterYear", "halfYear", "year")
        },
        totalPolicyCost: {
            type: DataTypes.NUMBER
        },
        paymentDone: {
            type: DataTypes.NUMBER
        },
        paymentPending: {
            type: DataTypes.NUMBER
        },
        premium: {
            type: DataTypes.NUMBER
        },
        customerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id',
            },
        },
        policyId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'policies',
                key: 'id',
            },
        },
        visibility: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
        paranoid: true
    }
);

customerPoliciesModel.belongsTo(policyModel, { foreignKey: 'policyId', onDelete: null });

(async () => {
    await db.sync();
})();

export default customerPoliciesModel;
