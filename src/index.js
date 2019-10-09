import { run } from "./app/app";
import { AlertServices } from "./app/alertServices";
import { ComponentServices } from "./app/components.services";
const alertServices = new AlertServices();
const componentServices = new ComponentServices();

import "./main.css";

run(alertServices, componentServices);
alert("hi");
