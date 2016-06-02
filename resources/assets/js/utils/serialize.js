function get_class (obj) {	// Returns the name of the class of an object
    //
    // +   original by: Ates Goral (http://magnetiq.com)
    // +   improved by: David James

    if (obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function) && obj.constructor) {
        var arr = obj.constructor.toString().match(/function\s*(\w+)/);

        if (arr && arr.length == 2) {
            return arr[ 1 ];
        }
    }

    return false;
}


export function serialize (mixed_val) {    // Generates a storable representation of a value
    //
    // +   original by: Ates Goral (http://magnetiq.com)
    // +   adapted for IE: Ilia Kantor (http://javascript.ru)

    switch (typeof(mixed_val)) {
        case "number":
            if (isNaN(mixed_val) || !isFinite(mixed_val)) {
                return false;
            } else {
                return (Math.floor(mixed_val) == mixed_val ? "i" : "d") + ":" + mixed_val + ";";
            }
        case "string":
            return "s:" + mixed_val.length + ":\"" + mixed_val + "\";";
        case "boolean":
            return "b:" + (mixed_val ? "1" : "0") + ";";
        case "object":
            if (mixed_val == null) {
                return "N;";
            } else if (mixed_val instanceof Array) {
                var idxobj = { idx: -1 };
                var map = []
                for (var i = 0; i < mixed_val.length; i++) {
                    idxobj.idx++;
                    var ser = serialize(mixed_val[ i ]);

                    if (ser) {
                        map.push(serialize(idxobj.idx) + ser)
                    }
                }

                return "a:" + mixed_val.length + ":{" + map.join("") + "}"

            }
            else {
                var class_name = get_class(mixed_val);

                if (class_name == undefined) {
                    return false;
                }

                var props = new Array();
                for (var prop in mixed_val) {
                    var ser = serialize(mixed_val[ prop ]);

                    if (ser) {
                        props.push(serialize(prop) + ser);
                    }
                }
                return "O:" + class_name.length + ":\"" + class_name + "\":" + props.length + ":{" + props.join("") + "}";
            }
        case "undefined":
            return "N;";
    }

    return false;
}
