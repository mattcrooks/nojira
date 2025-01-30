# NoJiRa Protocol

### Roles
Roles are hats that a user can wear, not their identity.

* A **Contributor** is a person who MAY send a pull request to solve a problem.   
* A **Maintainer** is a person who MAY merge pull requests.
* An **Administrator** is a person or voting bloc who has dictatorial powers over the organization.


### Lifecycle
Problems are intended to go through a specific lifecycle. 

All problems begin as `open`. Problems that can be solved in something like 4 hours of work or less can be claimed and solved. To claim a problem, a Contributor MUST update the status to `claimed`.

The reason problems should be claimed before working on them is to prevent duplicate work.

If the person who claimed a problem does not send a pull request or some other solution AND has provided no other updates for a period of greater than 12 hours, Maintainers SHOULD revert the problem back to the `open` status so that it can be claimed by someone else.

When the person who claimed a problem has created a patch or other solution they should update the status to `patched` and include a link to the pull request or other solution. 

If a problem looks to be bigger or more complicated than something that can be solved in less than 4 hours of working time, the problem should be decomposed into smaller problems, or a stub child problem added to explain why it's too big.

A problem that has children that are not `closed` MAY NOT be claimed and the derived state `has_children` is used to reflect this status.

A problem (or branch of the the problem tree) that should not be focused on right now can be `paused`. This makes all downsteam children also paused. If a problem is claimed and then a maintainer marks it as `paused` then the contributor can choose to abandon the problem or finish up their work as usual. 

When a problem is not actionable due to it being poorly defined or lacking sufficient decomposition into child problems, a new child SHOULD be created to reflect this.

#### State Transitions

| Status | Valid Next States | Notes |
|---|---|---|
|`draft`|`closed` `open` ||
|`open`|`has_children` `claimed` `patched` `closed` `paused` ||
|`claimed`|`paused` `open` `has_children` `patched`||
|`paused`|`closed` `open` ||
|`has_children`|`open` |This is derived rather than explicitely set.|
|`patched`| `open` `claimed` `closed` ||
|`closed`| `open` |re-opening a closed problem|

Note: the `has_children` status does not neccessarily need to exist in the database and can be derived on the frontend. Database could use an `@auth` directive to check for children before allowing `claimed`.

### Problem Object Data Structure

| RFC 2119 | Description | Spec or Example |
|---|---|---|
|MUST|Unique Identifier|`<random 256bit hex>`|
|MUST|Creator|`<pubkey>`|
|SHOULD|The parent(s) of this problem|`[<256bit hex>, ...]`|
|MUST|One sentence describing the problem, used as the title in clients|`<up to 140 character description of the problem>`|
|SHOULD|One paragraph describing the problem|`<up to 560 charactars summarizing the problem>`|
|OPTIONAL|One page describing the problem, MAY include markdown|`<extended description of the problem, MAY contain markdown>`|
|OPTIONAL|Org(s) that this applies to|`[<org identifier>]`|
|SHOULD|Lifecycle status|`<draft \| open_children \| open \| claimed \| patched \| closed">`|
|OPTIONAL|Claim data|`(<pubkey claiming it>, <timestamp when claimed>)`|
|OPTIONAL|repository |`[(<url for pull requests>, <canonical bare repo>)]`|
|OPTIONAL|required skills, language, credentials, etc|`["golang", "docker", ...]`|
|SHOULD|Maintainers, client SHOULD copy the parent problem's maintainers or the Organization's maintainers to begin with|`[<pubkey>, ...]`|
|MUST| Timestamp when created | `<timestamp>` |
|MUST| Timestamp when updated | `<timestamp>` |
|OPTIONAL| Discussion | `[<UID of comment>, ...]` |
|OPTIONAL|Solution(s)|`[<solution object>]`|

### Solution Object Data Structure
| RFC 2119 | Description | Spec or Example |
|---|---|---|
|MUST|Unique Identifier|`<random 256bit hex>`|
|MUST|Creator|`<pubkey>`|
|MUST|URL|`<url of solution (e.g. PR)>`|
|SHOULD|Description of solution|`<Markdown description of solution>`|
|MUST|Cost of solution (USD)|`<int>`|
|MUST| Timestamp when created | `<timestamp>` |

### Comment Object Data Structure
Discussions can occur in relation to Problems.  

| RFC 2119 | Description | Spec or Example |
|---|---|---|
|MUST|Unique Identifier|`<random 256bit hex>`|
|MUST|Creator|`<pubkey>`|
|MUST|Comment text|`<up to 560 charactars inline markdown (no headings etc)>`|
|SHOULD|The parent(s) of this comment (a Problem or another Comment)|`[<256bit hex UID>, ...]`|
|MUST| Timestamp when created | `<timestamp>` |
|OPTIONAL| Associated Lifecycle Modification | |`<draft \| open_children \| open \| claimed \| patched \| closed">` |
|OPTIONAL|User tags|`[<pubkey>, ...]`|

### User Object Data Structure

| RFC 2119 | Description | Spec or Example |
|---|---|---|
|MUST|Pubkey|`<random 256bit hex>`|
|MUST|Name|`<Name of the user (length <20 )>`|
|MUST|Github|`<Github Username>`|
|SHOULD|email|`<email address>`|
|SHOULD|Telegram|`<telegram username>`|
|MUST|Sponsored By (sybil mitigation)|`<UID of the user who invited this user>`|
|SHOULD|Rate|`<hourly rate in USD>`|
|SHOULD|Payment Addresses|`[(<network>, <address>), ...]`|
|MUST|Action History|`[<actions>]`|

### Organization Object Data Structure
| RFC 2119 | Description | Spec or Example |
|---|---|---|
|MUST|UID|`<random 256bit hex>`|
|MUST|Name|`<Name of the org (length <20 )>`|
|SHOULD|Github Org|`<Github org URL>`|
|MUST|Admins|`[<pubkey>, ...]`|
|SHOULD|Problems|`[<top level problems>, ...]`|
|SHOULD|Maintainers|`[<pubkey>, ...]`|
|SHOULD|Contributors|`[<pubkey>, ...]`|