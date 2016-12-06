```
import set from "oro-set"

var a  = { foo:{ bar:{ baz:1 } } }

set("foo|bar|baz", 5)(a) // { foo:{ bar:{ baz:5 } } }
```
