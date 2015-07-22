(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '    <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Spider</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Spider_Commands" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Spider/Commands.html">Commands</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Spider_Commands_Bag" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Commands/Bag.html">Bag</a>                    </div>                </li>                            <li data-name="class:Spider_Commands_Builder" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Commands/Builder.html">Builder</a>                    </div>                </li>                            <li data-name="class:Spider_Commands_Command" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Commands/Command.html">Command</a>                    </div>                </li>                            <li data-name="class:Spider_Commands_CommandInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Commands/CommandInterface.html">CommandInterface</a>                    </div>                </li>                            <li data-name="class:Spider_Commands_ProcessorInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Commands/ProcessorInterface.html">ProcessorInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Spider_Connections" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Spider/Connections.html">Connections</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Spider_Connections_Connection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Connections/Connection.html">Connection</a>                    </div>                </li>                            <li data-name="class:Spider_Connections_ConnectionInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Connections/ConnectionInterface.html">ConnectionInterface</a>                    </div>                </li>                            <li data-name="class:Spider_Connections_ConnectionNotFoundException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Connections/ConnectionNotFoundException.html">ConnectionNotFoundException</a>                    </div>                </li>                            <li data-name="class:Spider_Connections_Manager" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Connections/Manager.html">Manager</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Spider_Drivers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Spider/Drivers.html">Drivers</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Spider_Drivers_Gremlin" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Spider/Drivers/Gremlin.html">Gremlin</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Spider_Drivers_Gremlin_Driver" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Spider/Drivers/Gremlin/Driver.html">Driver</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Spider_Drivers_OrientDB" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Spider/Drivers/OrientDB.html">OrientDB</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Spider_Drivers_OrientDB_CommandProcessor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Spider/Drivers/OrientDB/CommandProcessor.html">CommandProcessor</a>                    </div>                </li>                            <li data-name="class:Spider_Drivers_OrientDB_Driver" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Spider/Drivers/OrientDB/Driver.html">Driver</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Spider_Drivers_AbstractDriver" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Drivers/AbstractDriver.html">AbstractDriver</a>                    </div>                </li>                            <li data-name="class:Spider_Drivers_ConnectionException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Drivers/ConnectionException.html">ConnectionException</a>                    </div>                </li>                            <li data-name="class:Spider_Drivers_DriverInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Drivers/DriverInterface.html">DriverInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Spider_Graphs" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Spider/Graphs.html">Graphs</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Spider_Graphs_Edge" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Graphs/Edge.html">Edge</a>                    </div>                </li>                            <li data-name="class:Spider_Graphs_Graph" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Graphs/Graph.html">Graph</a>                    </div>                </li>                            <li data-name="class:Spider_Graphs_GraphInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Graphs/GraphInterface.html">GraphInterface</a>                    </div>                </li>                            <li data-name="class:Spider_Graphs_Record" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Graphs/Record.html">Record</a>                    </div>                </li>                            <li data-name="class:Spider_Graphs_Vertex" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Spider/Graphs/Vertex.html">Vertex</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    {"type": "Namespace", "link": "Spider.html", "name": "Spider", "doc": "Namespace Spider"},{"type": "Namespace", "link": "Spider/Commands.html", "name": "Spider\\Commands", "doc": "Namespace Spider\\Commands"},{"type": "Namespace", "link": "Spider/Connections.html", "name": "Spider\\Connections", "doc": "Namespace Spider\\Connections"},{"type": "Namespace", "link": "Spider/Drivers.html", "name": "Spider\\Drivers", "doc": "Namespace Spider\\Drivers"},{"type": "Namespace", "link": "Spider/Drivers/Gremlin.html", "name": "Spider\\Drivers\\Gremlin", "doc": "Namespace Spider\\Drivers\\Gremlin"},{"type": "Namespace", "link": "Spider/Drivers/OrientDB.html", "name": "Spider\\Drivers\\OrientDB", "doc": "Namespace Spider\\Drivers\\OrientDB"},{"type": "Namespace", "link": "Spider/Graphs.html", "name": "Spider\\Graphs", "doc": "Namespace Spider\\Graphs"},
            {"type": "Interface", "fromName": "Spider\\Commands", "fromLink": "Spider/Commands.html", "link": "Spider/Commands/CommandInterface.html", "name": "Spider\\Commands\\CommandInterface", "doc": "&quot;Command: Contains the command script to be executed by the driver&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_getScript", "name": "Spider\\Commands\\CommandInterface::getScript", "doc": "&quot;Returns the current Command Script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_setScript", "name": "Spider\\Commands\\CommandInterface::setScript", "doc": "&quot;Sets the Command Script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_getScriptLanguage", "name": "Spider\\Commands\\CommandInterface::getScriptLanguage", "doc": "&quot;Returns the language of the current command script script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_setScriptLanguage", "name": "Spider\\Commands\\CommandInterface::setScriptLanguage", "doc": "&quot;Sets the current script language (eg OrientSQL, Cypher, etc)&quot;"},
            
            {"type": "Interface", "fromName": "Spider\\Commands", "fromLink": "Spider/Commands.html", "link": "Spider/Commands/ProcessorInterface.html", "name": "Spider\\Commands\\ProcessorInterface", "doc": "&quot;Command Processor Contract\nTo be implemented by drivers&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Commands\\ProcessorInterface", "fromLink": "Spider/Commands/ProcessorInterface.html", "link": "Spider/Commands/ProcessorInterface.html#method_process", "name": "Spider\\Commands\\ProcessorInterface::process", "doc": "&quot;Command Processor&quot;"},
            
            {"type": "Interface", "fromName": "Spider\\Connections", "fromLink": "Spider/Connections.html", "link": "Spider/Connections/ConnectionInterface.html", "name": "Spider\\Connections\\ConnectionInterface", "doc": "&quot;Facilitates two-way communication with a data-store&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_open", "name": "Spider\\Connections\\ConnectionInterface::open", "doc": "&quot;Connects to the database&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_close", "name": "Spider\\Connections\\ConnectionInterface::close", "doc": "&quot;Closes database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_getDriverName", "name": "Spider\\Connections\\ConnectionInterface::getDriverName", "doc": "&quot;Returns the class name of the active driver&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_getDriver", "name": "Spider\\Connections\\ConnectionInterface::getDriver", "doc": "&quot;Returns the instance of the driver&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_setDriver", "name": "Spider\\Connections\\ConnectionInterface::setDriver", "doc": "&quot;Updates the driver instance&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_executeReadCommand", "name": "Spider\\Connections\\ConnectionInterface::executeReadCommand", "doc": "&quot;Passes to driver: executes a Query or read command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_executeWriteCommand", "name": "Spider\\Connections\\ConnectionInterface::executeWriteCommand", "doc": "&quot;Passes to driver: executes a write command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_runReadCommand", "name": "Spider\\Connections\\ConnectionInterface::runReadCommand", "doc": "&quot;Passes to driver: executes a read command without waiting for a response&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_runWriteCommand", "name": "Spider\\Connections\\ConnectionInterface::runWriteCommand", "doc": "&quot;Passes to driver: executes a write command without waiting for a response&quot;"},
            
            {"type": "Interface", "fromName": "Spider\\Drivers", "fromLink": "Spider/Drivers.html", "link": "Spider/Drivers/DriverInterface.html", "name": "Spider\\Drivers\\DriverInterface", "doc": "&quot;Driver contract&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_setCredentials", "name": "Spider\\Drivers\\DriverInterface::setCredentials", "doc": "&quot;Sets the credentials from a properties array&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_setCredential", "name": "Spider\\Drivers\\DriverInterface::setCredential", "doc": "&quot;Sets and individual credential configuration item&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_getCredential", "name": "Spider\\Drivers\\DriverInterface::getCredential", "doc": "&quot;Returns an individual configuration item or fallback&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_open", "name": "Spider\\Drivers\\DriverInterface::open", "doc": "&quot;Connect to the database using already set, internal credentials&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_close", "name": "Spider\\Drivers\\DriverInterface::close", "doc": "&quot;Close the database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_executeReadCommand", "name": "Spider\\Drivers\\DriverInterface::executeReadCommand", "doc": "&quot;Executes a Query or read command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_executeWriteCommand", "name": "Spider\\Drivers\\DriverInterface::executeWriteCommand", "doc": "&quot;Executes a write command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_runReadCommand", "name": "Spider\\Drivers\\DriverInterface::runReadCommand", "doc": "&quot;Executes a read command without waiting for a response&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_runWriteCommand", "name": "Spider\\Drivers\\DriverInterface::runWriteCommand", "doc": "&quot;Executes a write command without waiting for a response&quot;"},
            
            {"type": "Interface", "fromName": "Spider\\Graphs", "fromLink": "Spider/Graphs.html", "link": "Spider/Graphs/GraphInterface.html", "name": "Spider\\Graphs\\GraphInterface", "doc": "&quot;\n&quot;"},
                    
            
            {"type": "Class", "fromName": "Spider\\Commands", "fromLink": "Spider/Commands.html", "link": "Spider/Commands/Bag.html", "name": "Spider\\Commands\\Bag", "doc": "&quot;Command Bag&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Commands\\Bag", "fromLink": "Spider/Commands/Bag.html", "link": "Spider/Commands/Bag.html#method___construct", "name": "Spider\\Commands\\Bag::__construct", "doc": "&quot;Create a new Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Bag", "fromLink": "Spider/Commands/Bag.html", "link": "Spider/Commands/Bag.html#method_make", "name": "Spider\\Commands\\Bag::make", "doc": "&quot;Return a new instance of a Command Bag&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Commands", "fromLink": "Spider/Commands.html", "link": "Spider/Commands/Builder.html", "name": "Spider\\Commands\\Builder", "doc": "&quot;Fluent Command Builder with optional connected driver&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method___construct", "name": "Spider\\Commands\\Builder::__construct", "doc": "&quot;Creates a new instance of the Command Builder&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_retrieve", "name": "Spider\\Commands\\Builder::retrieve", "doc": "&quot;Add a &lt;code&gt;retrieve&lt;\/code&gt; clause to the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_select", "name": "Spider\\Commands\\Builder::select", "doc": "&quot;Add a &lt;code&gt;select&lt;\/code&gt; clause to the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_only", "name": "Spider\\Commands\\Builder::only", "doc": "&quot;Add specific projections to the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_record", "name": "Spider\\Commands\\Builder::record", "doc": "&quot;Add &lt;code&gt;retrieve&lt;\/code&gt; clause to the current Command Bag for a single record&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_byId", "name": "Spider\\Commands\\Builder::byId", "doc": "&quot;Add &lt;code&gt;retrieve&lt;\/code&gt; clause to the current Command Bag for a single record\nAlias of &lt;code&gt;record()&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_from", "name": "Spider\\Commands\\Builder::from", "doc": "&quot;Set the target in the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_where", "name": "Spider\\Commands\\Builder::where", "doc": "&quot;Add a single or multiple &lt;code&gt;where&lt;\/code&gt; constraint to the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_orWhere", "name": "Spider\\Commands\\Builder::orWhere", "doc": "&quot;Add a &lt;code&gt;where&lt;\/code&gt; clause with an &lt;code&gt;OR&lt;\/code&gt; conjunction to the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_andWhere", "name": "Spider\\Commands\\Builder::andWhere", "doc": "&quot;Add a &lt;code&gt;where&lt;\/code&gt; clause with an &lt;code&gt;AND&lt;\/code&gt; conjunction to the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_limit", "name": "Spider\\Commands\\Builder::limit", "doc": "&quot;Set the result limit in the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_groupBy", "name": "Spider\\Commands\\Builder::groupBy", "doc": "&quot;Set which field to group results by in the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_orderBy", "name": "Spider\\Commands\\Builder::orderBy", "doc": "&quot;Set which fields to order results by in the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_asc", "name": "Spider\\Commands\\Builder::asc", "doc": "&quot;Return results in ascending order&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_desc", "name": "Spider\\Commands\\Builder::desc", "doc": "&quot;Return results in descending order&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_clear", "name": "Spider\\Commands\\Builder::clear", "doc": "&quot;Clear the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_command", "name": "Spider\\Commands\\Builder::command", "doc": "&quot;Dispatch a command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_all", "name": "Spider\\Commands\\Builder::all", "doc": "&quot;Dispatch a retrieve command with no limit.&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_one", "name": "Spider\\Commands\\Builder::one", "doc": "&quot;Retrieve the first result by dispatching the current Command Bag.&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_first", "name": "Spider\\Commands\\Builder::first", "doc": "&quot;Retrieve the first result by dispatching the current Command Bag.&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_getCommand", "name": "Spider\\Commands\\Builder::getCommand", "doc": "&quot;Return the current, processed Command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_getCommandBag", "name": "Spider\\Commands\\Builder::getCommandBag", "doc": "&quot;Return the current Command Bag&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Builder", "fromLink": "Spider/Commands/Builder.html", "link": "Spider/Commands/Builder.html#method_signToConstant", "name": "Spider\\Commands\\Builder::signToConstant", "doc": "&quot;Turns a user-inputed sign into a constant&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Commands", "fromLink": "Spider/Commands.html", "link": "Spider/Commands/Command.html", "name": "Spider\\Commands\\Command", "doc": "&quot;Command: Contains the command script to be executed by the driver&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Commands\\Command", "fromLink": "Spider/Commands/Command.html", "link": "Spider/Commands/Command.html#method___construct", "name": "Spider\\Commands\\Command::__construct", "doc": "&quot;Create a new Command from a text string&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Command", "fromLink": "Spider/Commands/Command.html", "link": "Spider/Commands/Command.html#method_getScript", "name": "Spider\\Commands\\Command::getScript", "doc": "&quot;Returns the current Command Script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Command", "fromLink": "Spider/Commands/Command.html", "link": "Spider/Commands/Command.html#method_setScript", "name": "Spider\\Commands\\Command::setScript", "doc": "&quot;Sets the Command Script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Command", "fromLink": "Spider/Commands/Command.html", "link": "Spider/Commands/Command.html#method_getScriptLanguage", "name": "Spider\\Commands\\Command::getScriptLanguage", "doc": "&quot;Returns the language of the current command script script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Command", "fromLink": "Spider/Commands/Command.html", "link": "Spider/Commands/Command.html#method_setScriptLanguage", "name": "Spider\\Commands\\Command::setScriptLanguage", "doc": "&quot;Sets the current script language (eg OrientSQL, Cypher, etc)&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\Command", "fromLink": "Spider/Commands/Command.html", "link": "Spider/Commands/Command.html#method___toString", "name": "Spider\\Commands\\Command::__toString", "doc": "&quot;Returns the script if object is called as a string&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Commands", "fromLink": "Spider/Commands.html", "link": "Spider/Commands/CommandInterface.html", "name": "Spider\\Commands\\CommandInterface", "doc": "&quot;Command: Contains the command script to be executed by the driver&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_getScript", "name": "Spider\\Commands\\CommandInterface::getScript", "doc": "&quot;Returns the current Command Script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_setScript", "name": "Spider\\Commands\\CommandInterface::setScript", "doc": "&quot;Sets the Command Script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_getScriptLanguage", "name": "Spider\\Commands\\CommandInterface::getScriptLanguage", "doc": "&quot;Returns the language of the current command script script&quot;"},
                    {"type": "Method", "fromName": "Spider\\Commands\\CommandInterface", "fromLink": "Spider/Commands/CommandInterface.html", "link": "Spider/Commands/CommandInterface.html#method_setScriptLanguage", "name": "Spider\\Commands\\CommandInterface::setScriptLanguage", "doc": "&quot;Sets the current script language (eg OrientSQL, Cypher, etc)&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Commands", "fromLink": "Spider/Commands.html", "link": "Spider/Commands/ProcessorInterface.html", "name": "Spider\\Commands\\ProcessorInterface", "doc": "&quot;Command Processor Contract\nTo be implemented by drivers&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Commands\\ProcessorInterface", "fromLink": "Spider/Commands/ProcessorInterface.html", "link": "Spider/Commands/ProcessorInterface.html#method_process", "name": "Spider\\Commands\\ProcessorInterface::process", "doc": "&quot;Command Processor&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Connections", "fromLink": "Spider/Connections.html", "link": "Spider/Connections/Connection.html", "name": "Spider\\Connections\\Connection", "doc": "&quot;Facilitates two-way communication with a driver store&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method___construct", "name": "Spider\\Connections\\Connection::__construct", "doc": "&quot;Constructs a new connection with driver and properties&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_open", "name": "Spider\\Connections\\Connection::open", "doc": "&quot;Connects to the database&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_close", "name": "Spider\\Connections\\Connection::close", "doc": "&quot;Closes database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method___call", "name": "Spider\\Connections\\Connection::__call", "doc": "&quot;Passes through to driver&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_getDriverName", "name": "Spider\\Connections\\Connection::getDriverName", "doc": "&quot;Returns the class name of the active driver&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_getDriver", "name": "Spider\\Connections\\Connection::getDriver", "doc": "&quot;Returns the instance of the driver&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_setDriver", "name": "Spider\\Connections\\Connection::setDriver", "doc": "&quot;Updates the driver instance&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_executeReadCommand", "name": "Spider\\Connections\\Connection::executeReadCommand", "doc": "&quot;Passes to driver: executes a Query or read command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_executeWriteCommand", "name": "Spider\\Connections\\Connection::executeWriteCommand", "doc": "&quot;Passes to driver: executes a write command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_runReadCommand", "name": "Spider\\Connections\\Connection::runReadCommand", "doc": "&quot;Passes to driver: executes a read command without waiting for a response&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Connection", "fromLink": "Spider/Connections/Connection.html", "link": "Spider/Connections/Connection.html#method_runWriteCommand", "name": "Spider\\Connections\\Connection::runWriteCommand", "doc": "&quot;Passes to driver: executes a write command without waiting for a response&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Connections", "fromLink": "Spider/Connections.html", "link": "Spider/Connections/ConnectionInterface.html", "name": "Spider\\Connections\\ConnectionInterface", "doc": "&quot;Facilitates two-way communication with a data-store&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_open", "name": "Spider\\Connections\\ConnectionInterface::open", "doc": "&quot;Connects to the database&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_close", "name": "Spider\\Connections\\ConnectionInterface::close", "doc": "&quot;Closes database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_getDriverName", "name": "Spider\\Connections\\ConnectionInterface::getDriverName", "doc": "&quot;Returns the class name of the active driver&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_getDriver", "name": "Spider\\Connections\\ConnectionInterface::getDriver", "doc": "&quot;Returns the instance of the driver&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_setDriver", "name": "Spider\\Connections\\ConnectionInterface::setDriver", "doc": "&quot;Updates the driver instance&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_executeReadCommand", "name": "Spider\\Connections\\ConnectionInterface::executeReadCommand", "doc": "&quot;Passes to driver: executes a Query or read command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_executeWriteCommand", "name": "Spider\\Connections\\ConnectionInterface::executeWriteCommand", "doc": "&quot;Passes to driver: executes a write command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_runReadCommand", "name": "Spider\\Connections\\ConnectionInterface::runReadCommand", "doc": "&quot;Passes to driver: executes a read command without waiting for a response&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\ConnectionInterface", "fromLink": "Spider/Connections/ConnectionInterface.html", "link": "Spider/Connections/ConnectionInterface.html#method_runWriteCommand", "name": "Spider\\Connections\\ConnectionInterface::runWriteCommand", "doc": "&quot;Passes to driver: executes a write command without waiting for a response&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Connections", "fromLink": "Spider/Connections.html", "link": "Spider/Connections/ConnectionNotFoundException.html", "name": "Spider\\Connections\\ConnectionNotFoundException", "doc": "&quot;Class ConnectionNotFoundException&quot;"},
                    
            {"type": "Class", "fromName": "Spider\\Connections", "fromLink": "Spider/Connections.html", "link": "Spider/Connections/Manager.html", "name": "Spider\\Connections\\Manager", "doc": "&quot;Manages and Builds Connections from a stored list&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Connections\\Manager", "fromLink": "Spider/Connections/Manager.html", "link": "Spider/Connections/Manager.html#method___construct", "name": "Spider\\Connections\\Manager::__construct", "doc": "&quot;Build a new manager instance&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Manager", "fromLink": "Spider/Connections/Manager.html", "link": "Spider/Connections/Manager.html#method_make", "name": "Spider\\Connections\\Manager::make", "doc": "&quot;Builds, Caches, and Returns a Connection, either default of other&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Manager", "fromLink": "Spider/Connections/Manager.html", "link": "Spider/Connections/Manager.html#method_fetch", "name": "Spider\\Connections\\Manager::fetch", "doc": "&quot;Returns cached connection or makes a new one&quot;"},
                    {"type": "Method", "fromName": "Spider\\Connections\\Manager", "fromLink": "Spider/Connections/Manager.html", "link": "Spider/Connections/Manager.html#method_clearCache", "name": "Spider\\Connections\\Manager::clearCache", "doc": "&quot;Clears connection cache&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Drivers", "fromLink": "Spider/Drivers.html", "link": "Spider/Drivers/AbstractDriver.html", "name": "Spider\\Drivers\\AbstractDriver", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Drivers\\AbstractDriver", "fromLink": "Spider/Drivers/AbstractDriver.html", "link": "Spider/Drivers/AbstractDriver.html#method___construct", "name": "Spider\\Drivers\\AbstractDriver::__construct", "doc": "&quot;Constructs a driver from a properties array&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\AbstractDriver", "fromLink": "Spider/Drivers/AbstractDriver.html", "link": "Spider/Drivers/AbstractDriver.html#method_setCredentials", "name": "Spider\\Drivers\\AbstractDriver::setCredentials", "doc": "&quot;Sets the credentials from a properties array&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\AbstractDriver", "fromLink": "Spider/Drivers/AbstractDriver.html", "link": "Spider/Drivers/AbstractDriver.html#method_setCredential", "name": "Spider\\Drivers\\AbstractDriver::setCredential", "doc": "&quot;Sets and individual credential configuration item&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\AbstractDriver", "fromLink": "Spider/Drivers/AbstractDriver.html", "link": "Spider/Drivers/AbstractDriver.html#method_getCredential", "name": "Spider\\Drivers\\AbstractDriver::getCredential", "doc": "&quot;Returns an individual configuration item or fallback&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Drivers", "fromLink": "Spider/Drivers.html", "link": "Spider/Drivers/ConnectionException.html", "name": "Spider\\Drivers\\ConnectionException", "doc": "&quot;Exception for broken or refused connection&quot;"},
                    
            {"type": "Class", "fromName": "Spider\\Drivers", "fromLink": "Spider/Drivers.html", "link": "Spider/Drivers/DriverInterface.html", "name": "Spider\\Drivers\\DriverInterface", "doc": "&quot;Driver contract&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_setCredentials", "name": "Spider\\Drivers\\DriverInterface::setCredentials", "doc": "&quot;Sets the credentials from a properties array&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_setCredential", "name": "Spider\\Drivers\\DriverInterface::setCredential", "doc": "&quot;Sets and individual credential configuration item&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_getCredential", "name": "Spider\\Drivers\\DriverInterface::getCredential", "doc": "&quot;Returns an individual configuration item or fallback&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_open", "name": "Spider\\Drivers\\DriverInterface::open", "doc": "&quot;Connect to the database using already set, internal credentials&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_close", "name": "Spider\\Drivers\\DriverInterface::close", "doc": "&quot;Close the database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_executeReadCommand", "name": "Spider\\Drivers\\DriverInterface::executeReadCommand", "doc": "&quot;Executes a Query or read command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_executeWriteCommand", "name": "Spider\\Drivers\\DriverInterface::executeWriteCommand", "doc": "&quot;Executes a write command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_runReadCommand", "name": "Spider\\Drivers\\DriverInterface::runReadCommand", "doc": "&quot;Executes a read command without waiting for a response&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\DriverInterface", "fromLink": "Spider/Drivers/DriverInterface.html", "link": "Spider/Drivers/DriverInterface.html#method_runWriteCommand", "name": "Spider\\Drivers\\DriverInterface::runWriteCommand", "doc": "&quot;Executes a write command without waiting for a response&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Drivers\\Gremlin", "fromLink": "Spider/Drivers/Gremlin.html", "link": "Spider/Drivers/Gremlin/Driver.html", "name": "Spider\\Drivers\\Gremlin\\Driver", "doc": "&quot;Driver for Gremlin Server&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Drivers\\Gremlin\\Driver", "fromLink": "Spider/Drivers/Gremlin/Driver.html", "link": "Spider/Drivers/Gremlin/Driver.html#method___construct", "name": "Spider\\Drivers\\Gremlin\\Driver::__construct", "doc": "&quot;Create a new instance with a client&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\Gremlin\\Driver", "fromLink": "Spider/Drivers/Gremlin/Driver.html", "link": "Spider/Drivers/Gremlin/Driver.html#method_open", "name": "Spider\\Drivers\\Gremlin\\Driver::open", "doc": "&quot;Open a database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\Gremlin\\Driver", "fromLink": "Spider/Drivers/Gremlin/Driver.html", "link": "Spider/Drivers/Gremlin/Driver.html#method_close", "name": "Spider\\Drivers\\Gremlin\\Driver::close", "doc": "&quot;Close the database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\Gremlin\\Driver", "fromLink": "Spider/Drivers/Gremlin/Driver.html", "link": "Spider/Drivers/Gremlin/Driver.html#method_executeReadCommand", "name": "Spider\\Drivers\\Gremlin\\Driver::executeReadCommand", "doc": "&quot;Executes a Query or read command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\Gremlin\\Driver", "fromLink": "Spider/Drivers/Gremlin/Driver.html", "link": "Spider/Drivers/Gremlin/Driver.html#method_executeWriteCommand", "name": "Spider\\Drivers\\Gremlin\\Driver::executeWriteCommand", "doc": "&quot;Executes a write command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\Gremlin\\Driver", "fromLink": "Spider/Drivers/Gremlin/Driver.html", "link": "Spider/Drivers/Gremlin/Driver.html#method_runReadCommand", "name": "Spider\\Drivers\\Gremlin\\Driver::runReadCommand", "doc": "&quot;Executes a read command without waiting for a response&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\Gremlin\\Driver", "fromLink": "Spider/Drivers/Gremlin/Driver.html", "link": "Spider/Drivers/Gremlin/Driver.html#method_runWriteCommand", "name": "Spider\\Drivers\\Gremlin\\Driver::runWriteCommand", "doc": "&quot;Executes a write command without waiting for a response&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Drivers\\OrientDB", "fromLink": "Spider/Drivers/OrientDB.html", "link": "Spider/Drivers/OrientDB/CommandProcessor.html", "name": "Spider\\Drivers\\OrientDB\\CommandProcessor", "doc": "&quot;Class QueryProcessor&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\CommandProcessor", "fromLink": "Spider/Drivers/OrientDB/CommandProcessor.html", "link": "Spider/Drivers/OrientDB/CommandProcessor.html#method_process", "name": "Spider\\Drivers\\OrientDB\\CommandProcessor::process", "doc": "&quot;Command Processor&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\CommandProcessor", "fromLink": "Spider/Drivers/OrientDB/CommandProcessor.html", "link": "Spider/Drivers/OrientDB/CommandProcessor.html#method_toSqlOperator", "name": "Spider\\Drivers\\OrientDB\\CommandProcessor::toSqlOperator", "doc": "&quot;Map a Command Bag operator to its Orient SQL counterpart&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Drivers\\OrientDB", "fromLink": "Spider/Drivers/OrientDB.html", "link": "Spider/Drivers/OrientDB/Driver.html", "name": "Spider\\Drivers\\OrientDB\\Driver", "doc": "&quot;Driver for Native OrientDB (not using gremlin)&quot;"},
                                                        {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\Driver", "fromLink": "Spider/Drivers/OrientDB/Driver.html", "link": "Spider/Drivers/OrientDB/Driver.html#method___construct", "name": "Spider\\Drivers\\OrientDB\\Driver::__construct", "doc": "&quot;Create a new instance with a client&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\Driver", "fromLink": "Spider/Drivers/OrientDB/Driver.html", "link": "Spider/Drivers/OrientDB/Driver.html#method_open", "name": "Spider\\Drivers\\OrientDB\\Driver::open", "doc": "&quot;Connect to the database using already set, internal credentials&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\Driver", "fromLink": "Spider/Drivers/OrientDB/Driver.html", "link": "Spider/Drivers/OrientDB/Driver.html#method_close", "name": "Spider\\Drivers\\OrientDB\\Driver::close", "doc": "&quot;Close the database connection&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\Driver", "fromLink": "Spider/Drivers/OrientDB/Driver.html", "link": "Spider/Drivers/OrientDB/Driver.html#method_executeReadCommand", "name": "Spider\\Drivers\\OrientDB\\Driver::executeReadCommand", "doc": "&quot;Executes a Query or read command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\Driver", "fromLink": "Spider/Drivers/OrientDB/Driver.html", "link": "Spider/Drivers/OrientDB/Driver.html#method_executeWriteCommand", "name": "Spider\\Drivers\\OrientDB\\Driver::executeWriteCommand", "doc": "&quot;Executes a write command&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\Driver", "fromLink": "Spider/Drivers/OrientDB/Driver.html", "link": "Spider/Drivers/OrientDB/Driver.html#method_runReadCommand", "name": "Spider\\Drivers\\OrientDB\\Driver::runReadCommand", "doc": "&quot;Executes a read command without waiting for a response&quot;"},
                    {"type": "Method", "fromName": "Spider\\Drivers\\OrientDB\\Driver", "fromLink": "Spider/Drivers/OrientDB/Driver.html", "link": "Spider/Drivers/OrientDB/Driver.html#method_runWriteCommand", "name": "Spider\\Drivers\\OrientDB\\Driver::runWriteCommand", "doc": "&quot;Executes a write command without waiting for a response&quot;"},
            
            {"type": "Class", "fromName": "Spider\\Graphs", "fromLink": "Spider/Graphs.html", "link": "Spider/Graphs/Edge.html", "name": "Spider\\Graphs\\Edge", "doc": "&quot;Class Edge&quot;"},
                    
            {"type": "Class", "fromName": "Spider\\Graphs", "fromLink": "Spider/Graphs.html", "link": "Spider/Graphs/Graph.html", "name": "Spider\\Graphs\\Graph", "doc": "&quot;Class GraphCollection&quot;"},
                    
            {"type": "Class", "fromName": "Spider\\Graphs", "fromLink": "Spider/Graphs.html", "link": "Spider/Graphs/GraphInterface.html", "name": "Spider\\Graphs\\GraphInterface", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "Spider\\Graphs", "fromLink": "Spider/Graphs.html", "link": "Spider/Graphs/Record.html", "name": "Spider\\Graphs\\Record", "doc": "&quot;Class Record&quot;"},
                    
            {"type": "Class", "fromName": "Spider\\Graphs", "fromLink": "Spider/Graphs.html", "link": "Spider/Graphs/Vertex.html", "name": "Spider\\Graphs\\Vertex", "doc": "&quot;Class Vertex&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


