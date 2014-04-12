# Unite Note
Unite Note is a system that allows you to create, read, and search freely organizable, inter-related information at amazing speed.

The goal of Unite Note is ambitious: we try to be the ultimate information system of the world. Everything you know, and want to know, can be stored in Unite Note and can be accessed by yourself, or share with any one you want, or simply share it to the world.


**TODO: There should be a better name than "Information System", "Information Hub", "Note Taking Application", "Informational Database", etc. May be we need to create a new name. It is something the world have not seen before**

**TODO: There should be a better name than "Unite Note" (url still available), past names are "Memo Soup", "Memoish", "Memo Framework"**

# Specification
## Concept of Node
In Unite Note, everything is a node. I mean everything. You can look at node as a **single unit of information that can be referenced or related to**.

### Node & Relation
There are two kinds of node: Node or Relation. The difference is very simple:

	If a node has one or more Relational relation(s) (defined below), it is a Relation, otherwise, it is a Node.

When you have some information that relates to two or more nodes, you create a new Relation node to contain that information.

A Node can have 1 or more names, and a Relation can have 0 or more names. When a Relation does not have a name, it means it cannot be searched and cannot be referenced manually.

Note that there are special types of node in the system, they are defined using the Type relation described below. Here we are talking about the kinds of node, which is much less significant to you when you are using the system. But understanding the difference would help you to understand Unite Note better and use it in the way you want.

## Concept of Relation
Relation is the heart of Unite Note. To be clear, in this section we are talking about the concept of relation itself (the relation between nodes) and not the Relation node.

A relation is created when you connect two or more nodes together. Each relation has a dimension: unary, binary, or higher. But just like you don't have to understand how do you walk when you are walking, you will define and use relation without thinking about all these philosophical details of relation.

There are five types of relation: Type, Context, Relational, Tag, and Alias (for the geeky of you, the dimension of Type, Context, and Tag are unary, Relational is binary or higher, and Alias can be of any dimensions).

### Type
A Type relation is established when you describe a node is of certain type. To put in another way, it describes the *is-a* relation between the *Target* and the *Type*.

For example, `[Readme file]` has type (*is-a*) `[documentation]`.

### Contextual
A Contextual relation is established when you describe a **of**, or **group** relation.

For example, `[Readme file]` in the context of `[Unite Note]` refers to this file (or in Unite Note sense, this node).

### Relational
A Relational relation is established **when you create a node to describe the relation betwen two or more nodes**. You do that either when you try to describe a relation between two nodes that the type of relation is ambiguish (meaning you need to define the type explicitly), or you want to describe something about the relation itself.

For example, `[create]` is the relation between the node `[Homa]` and `[Readme file]` (the resulting Relation node is `[Homa]->[Readme file]:[create]`).

Relation can be uni-directional (`->`) or bi-directional (`<->`). It can have one or more nodes on either side of the arrow.

### Tag
A Tag relation is established when you describe a node is related to another node.
The type of the relation should be well established, easily understood thus don't need to be defined explicitly. This means that the type of the tag and the target should be sufficient to describe what that relation is.

For example, tagging `[2014/4/7]` to `[Homa]->[Readme file]:[create]` means "Homa creates the readme file on 2014/4/7".

### Alias
A Alias relation is established when you describe a **same-as** or **equivalent** relation. It is used to by the tag engine to define those "well established" relationship between types.

In a sense, each name in a multiple names node is an alias to each other.

For example, `[birthday]` is an alias of `[birth]->[date]`.

## Concept of Context
When you have more and more information, you will need to organize them in a meaningful way so that you can find them easily and avoid conflict. Context is how Unite Note organize nodes.

A Context provides a way to scope the nodes you are viewing and creating. You can think of it as a group, package, or namespace. To declare a node is a context, you simply need to describe the node has type `Context` (Notice the missing of square brackets. That indicates it is a special system node). This will be done automatically for you when you actually use a node as a context of another node.

Each node must belongs to one or more contexts. By default the context `[YourUsername]` will automatically applied to every node you create.

### Hierarchy/Nesting of Context
When you have multiple contexts, The context will automatically form a hierarchical structure. But this structure does not necessary look like a tree; instead, it looks more like overlapping sets.

### Uniqueness of node
The uniqueness of node is determined by combinding the set of context and the name of the node. Within the same context set, you cannot create two nodes with the same name.

For example, you can have `[Readme file]` in context `[Unite Note]`, `[Readme file]` in context set with `[Unite Note]` and `[End User]`, and `[Readme file]` in context set with `[Unite Note]` and `[Developer]`.

## Composition of nodes
While it is perfectly fine to read the information directly on Unite Note (it is actually a great experience), There are many occasions you want to create a specific view of a set of nodes from a specific viewpoint. In plain English, it means that you need to present the information in different ways for different people.

For example, you are working on a project. You need to create an executive summary for your boss, a progress report for your manager, another progress report for your teammates, a marketing piece for the marketing team, a bug tracking report for QA, etc. The information they contain are largely overlapped. How do you create these specific documents (a view of the information) from the information you have? And more importantly, how do you keep track of whether if a specific document is outdated and need to be updated? Is there a possibility that they can be updated automatically?

This is where componsition comes in. In Unite Note, you can create a node that somewhere in its content references the content of another node.

**NOTE: No templating is on the roadmap yet, because it doesn't make much sense for normal information. If you use Unite Note as source control or storing a programming solution, yes there might be a need of templating (I wonder the solution consumer (e.g. Visual Studio) should handle that outside of Unite Note anyway). But that's far in the future**

**NOTE: Because of composition, it might make sense to have the concept of data node and composition node. Data node contains information without any formatting, while componsition node contains all formating.**

## Views
There are three views in Unite Note: Browse, Render, and Edit.

**TODO: Expand this section**

## Syntax
Unite Note has a very simple syntax. The objective is to make it as easy to write as it is easy to read. The syntax is subject to change, as it is still in early development stage.

### Referencing a node
When you need to reference a node, you enclose one of the node's name in `[]`. For example, `[Readme file]` is referencing the node with name "Readme file".
When you have nodes with same name in multiple contexts, you can reference the node by specifying the context in front of the node, like `[Unite Note].[Readme File]`. Since a node must have unique name in the same set, you will be able to reference any node by adding the context that makes two nodes with the same name unique.

For example, if you have nodes as in the "Uniqueness of node" section, you can reference the `[Readme file]` node for developer by any of the following:

-  `[Unite Note].[Developer].[Readme File]`
-  `[Developer].[Unite Note].[Readme File]`
-  `[Developer].[Readme File]`

### Overall syntax
Here is the syntax when you throw everything into a node (which rarely happens):

	[Context1]
	[Context2]
	Name of node 1
	Name of node 2
	[RelationNodeA]->[RelationNodeB]
	[RelationNodeC]<->[RelationNodeD]
	:[AliasTypeA]->[AliasTypeB]
	:[AliasTypeC]->[AliasTypeD]
	:[TypeA]
	:[TypeB]
	[TagA]
	[TagB]
		Content

- A node can have more than one of Context, Name, Relation, Alias, Type, and Tag
- Relation, Alias, Type, and Tag can be of any order, but generally the order shown above is more preferred (and keeping this *coding standard* helps readability).
- Content of the node is defined by the type of the node. By default the content is **markdown** text. This can be changed in configuration or overrided in section defaults (The concept of section is described below). There are other content types to choose from, such as audio, picture, video, drawing etc.
- When the content is not text, it should contain a link to the media file/binary.
- (NOTE: a node with two Relations like this likely will not happen in real data, this is only for example purpose).


### Basic Syntax
To make a valid node, you only need [Context] + Name or Relation.

	[Context]
	Name of node

	[Context]
	[RelationNodeA]->[RelationNodeB]
		Content or Description

But remember form Concept of Context section, a default context `[YourUsername]` will be applied to every node you create, so the simplist form of a node is like this:

	Name of node

Generally, it make sense to define at least one type for the node though.


### Alias Syntax

	Name of node
	:[AliasTypeA]->[AliasTypeB]
	:[TypeA]

Here is an example for alias:

	Birthday
	B'day
	:[Birth]->[Date]
	:[Date]

**NOTE: The Alias syntax is a bit wasteful because one side of the relation is the type of the node itself. Maybe just `:[Birth]->`, `:->[Node]` or `:[Birth]->[.|this]` or `:[.|this]->[node]`?**

### Composition Syntax
There are two ways to reference another node within the content area: link and render.

Link will create a link to the other node. The syntax of link is just referencing the other node. For example:

	Readme File
		There is some content....
		To learn more about Unite Note, please visit our website at [Website Name](url).
		You can also look at [Another Document].
		
Unite Note will automatically look up `[Another Document]` and add the corresponding link to it in the correct link format `[Another Document](id)`

Render will place the content of another node directly in the content at the Render View. The syntax is placing `!` in front of the reference. For example:

	Readme File
		# Unite Note
		![What is Unite Note]
		
		# Specification
		## Concept of Node
		![Concept of Node]

### Shortened Syntax
If you feel like putting each reference in a single line is wasteful, you can shorten it by combining some of them on the same line. The exception to this rule is Name and Relation, because it would introduce ambiguity. For example:

	[ContextA]
	[ContextB]
	Name A
	Name B
	[NodeA]->[NodeB]
	[NodeC]<->[NodeD]
	:[TypeA]
	:[TypeB]
	[TagA]
	[TagB]
		Content
		
Can be written as:

	[ContextA][ContextB]
	Name A
	Name B
	[NodeA]->[NodeB]
	[NodeC]->[NodeD]
	:[TypeA]:[TypeB]
	[TagA][TagB]
		Content

The following are also valid:

	[ContextA][ContextB]
	Name A
	[NodeA]->[NodeB]:[TypeA]:[TypeB][TagA][TagB]
		Content

This is possible as long as it does not introduce ambiguity. In reality (and for readability), The most common shortened way of writing a node is for the following scenario:

	[NodeA]->[NodeB]:[TypeA]
	
as in the sample:

	[Homa]->[Readme file]:[Create]	

**Note: For the initial version, only this form is scheduled to be supported. The more complicated shortened syntax will be supported in the future.**

### Section - Writing multiple nodes
It would be very slow if you need to write multiple nodes one at a time. You can utilize sections to make writing multiple nodes faster with less typing.

To write multiple nodes, make sure you have at least one blank line seperate them. For example:

	Readme file
		*Content of this file*
	
	[Homa]->[Readme file]:[Create]
	
has two nodes defined.

You can break a file, or a text area into multiple sections with 4 or more dashes `----`. You don't need to add `----` at the beginning and the end. Anything beyond the 4 dashes on that line is ignored, thus the following are the same:

	----
	
	---------!%@--- more dashes and text after 4 dashes are ignored.

At the beginning of a section, you can specify default Contexts, Types, and Tags that will apply to each node within that section. You need to have a blank line between the defaults and the first node you write.

You can also nest sections by further indent the text. In nested sections, you do need to define as least one default Contexts, Types, or Tags (or else it doesn't make sense to create the nested section anyway).

So, to write the "Readme file" example, you can write it like this:

	[Unite Note]
	Readme file
	:[Documentation]
		*Content of the this file*

	[Unite Note]		
	[Homa]->[Readme file]
	:[Create]
	[2014/4/7]


or like this:

	[Unite Note]
	
	Readme file
	:[documentation]
		*Content of the this file*
		
	[Homa]->[Readme file]
	:[Create]
	[2014/4/7]

Um... that doesn't seems to have much saving. How about this example:

	[Unite Note]
	Readme file
	:[Documentation]
		*Content of the this file*

	[Unite Note]
	Sample file 1
	:[Documentation]
		*Content*

	[Unite Note]
	Sample file 2
	:[Documentation]
		*Content*

	[Unite Note]
	Sample file 3
	:[Documentation]
		*Content*

	[Unite Note]		
	[Homa]->[Readme file]
	:[Create]
	[2014/4/7]
	
	[Unite Note]		
	[Homa]->[Sample file 1]
	:[Create]
	[2014/4/7]

	[Unite Note]		
	[Homa]->[Sample file 2]
	:[Create]
	[2014/4/7]

	[Unite Note]		
	[Homa]->[Sample file 3]
	:[Create]
	[2014/4/7]

	[Unite Note]		
	[Homa]->[Readme file]
	:[Update]
	[2014/4/8]
		Update something
		
	[Unite Note]		
	[Homa]->[Readme file]
	:[Update]
	[2014/4/9]
		Update something else
		
to this:

	[Unite Note]
	
		:[Documentation]
		
		Readme file
			*Content of the this file*

		Sample file 1
			*Content*

		Sample file 2
			*Content*

		Sample file 3
			*Content*

		----
		:[Create]
		[2014/4/7]
		
		[Homa]->[Readme file]
		
		[Homa]->[Sample file 1]

		[Homa]->[Sample file 2]

		[Homa]->[Sample file 3]

		----
		:[Update]

		[Homa]->[Readme file]
		[2014/4/8]
			Update something
			
		[Homa]->[Readme file]
		[2014/4/9]
			Update something else


### Reserved Keywords

| Keywords              | Note                      |
| --------------------- | ------------------------- |
| :Context              |                           |
| :Media.text.*         | markdown and other syntax |
| :Media.audio.*        |                           |
| :Media.video.*        |                           |
| :Media.picture.*      |                           |
| :Media.drawing.*      |                           |


## Export/Import
You can write Unite Note using your favorite text editor. The file can then be imported to the system. The system can also export everything to a package which contains an Unite Note file and all medias associated with it.