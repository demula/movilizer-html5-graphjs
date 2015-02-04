/**
 ************************************************************
 * THIS IS A MOCK MOVILIZER ACCESS FUCTIONS, WHICH WILL BE
 * REPLACED IN THE APPLICATION WITH REAL PROCESSING CODE
 ************************************************************
 */
Movilizer = function () {};
/**
 * Returns value for given global variable.
 * @param varName variable name
 * @param successCB success callback
 * @param errorCB error callback
 * @return Value of global variable
 */
Movilizer.prototype.readGlobalVariable = function (varName, successCB, errorCB) {
    var result = "OK";
    successCB(result);
};

/**
 * Returns value for given global variable.
 * @param varName variable name
 * @param successCB success callback
 * @param errorCB error callback
 * @param namespace global variable namespace
 * @return Value of global variable
 */
Movilizer.prototype.readGlobalVariableWithNamespace = function (varName, successCB, errorCB, namespace) {
    var result = "OK";
    successCB(result);
};

/**
 * Returns value for given global variable.
 * @param varName variable name
 * @param varValue variable new value
 */
Movilizer.prototype.writeGlobalVariable = function (varName, varValue) {

};

/**
 * Returns value for given global variable.
 * @param varName variable name
 * @param varValue variable new value
 * @param namespace global variable namespace
 */
Movilizer.prototype.writeGlobalVariableWithNamespace = function (varName, varValue, namespace) {

};

/**
 * Executes query masterdata MEL function and return the result
 * @param pool MD Pool - make sure this is obtained from MEL ($global:mdPool = $masterdata:poolId)
 * @param group MD Group
 * @param filter Array/table specifying the filter condition
 * @param returnSpec Array/table specifying the return specification
 * @param successCB success callback
 * @param errorCB error callback
 * @return Array with results
 */
Movilizer.prototype.queryMasterData = function (pool, group, filter, returnSpec, successCB, errorCB) {
    var result = "OK";
    successCB(result);
};

movilizer = new Movilizer();