import * as mongoose from 'mongoose';
import { EmployeeSchema } from '../models/employee-schema';
import { Request, Response } from 'express';
const Employee = mongoose.model('Employee', EmployeeSchema);
export class EmployeeController {

    public addNewEmployee(req: Request, res: Response) {
        req.body._user_id = req.body.user._id;
        let newEmployee = new Employee(req.body);
        newEmployee.save((err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
    }
    public getEmployees(req: Request, res: Response) {
        Employee.find({ _user_id: req.body.user._id }, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
    }

    public getEmployeeByID(req: Request, res: Response) {
        Employee.findById(req.params.employeeId, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
    }
    public updateEmployee(req: Request, res: Response) {
        console.log('here');
        req.body._user_id = req.body.user._id;
        Employee.findOneAndUpdate({ _id: req.params.employeeId }, req.body, { new: true }, (err, employee) => {
            if (err) {
                console.log('bad');
                res.send(err);
            }
            console.log("good");
            res.json(employee);
        });
    }
    public deleteEmployee(req: Request, res: Response) {
        Employee.deleteOne({ _id: req.params.employeeId }).then(
            () => {
                res.send({ Status: 1, statusVal: 'sucess' });
            }, () => {
                res.json({ error: 'delete failed' });
            }
        );
    }
}
