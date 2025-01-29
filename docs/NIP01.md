# NoJiRa Protocol

### Roles
Roles are hats that a user can wear, not their identity.

* A **Contributor** is a person who MAY send a pull request to solve a problem.   
* A **Maintainer** is a person who MAY merge pull requests.
* An **Administrator** is a person who has dictatorial powers over the organization.


### Lifecycle
Problems are intended to go through a specific lifecycle. 

All problems begin as `open`. Problems that can be solved in something like 4 hours of work or less can be claimed and solved. To claim a problem, a Contributor MUST update the status to `claimed`.

The reason problems should be claimed before working on them is to prevent duplicate work.

If the person who claimed a problem does not send a pull request or some other solution and is not responsive for a period of greater than 48 hours, Maintainers SHOULD revert the problem back to the `open` status so that it can be claimed by someone else.

When the person who claimed a problem has created a patch or other solution they should update the status to `patched` and include a link to the pull request or other solution. 

If a problem looks to be bigger or more complicated than something that can be solved in less than 4 hours of working time, the problem should be decomposed into smaller problems, or a stub child problem added to explain why it's too big.

A problem that has open children MAY NOT be claimed and SHOULD have the status `children`.

A problem (or branch of the the problem tree) that should not be focused on right now can be `paused`. This makes all downsteam children also paused. If a problem is claimed and then a maintainer marks it as `paused` then the contributor can choose to abandon the problem or finish up their work as usual.


| Status | Valid Next States | Notes |
|---|---|---|
|`open`|`has_children` `claimed` `patched` `closed` `paused` ||
|`claimed`|`paused` `open` `has_children`||
|`paused`|`closed` `open` ||
|`has_children`|`open` |Only once all children are closed||`claimed`|`open` `patched` `closed` ||
|`patched`| `open` `claimed` `closed` ||
|`closed`| `open` |re-opening a closed problem|

### Problem Object Data Structure

| RFC 2119 | Description | Spec or Example |
|---|---|---|
|MUST|Unique Identifier|`<random 256bit hex>`|
|MUST|One sentence describing the problem, used as the title in clients|`<up to 140 character description of the problem>`|
|SHOULD|One paragraph describing the problem|`<up to 560 charactars summarizing the problem>`|
|OPTIONAL|One page describing the problem, MAY include markdown|`<extended description of the problem, MAY contain markdown>`|
|SHOULD|The parent(s) of this problem|`[<256bit hex>]`|
|OPTIONAL|Org(s) that this applies to|`[<org identifier>]`|
|SHOULD|Lifecycle status|`["status", "<draft \| rfm \| big \| children \| open \| claimed \| patched \| closed">]`|
|OPTIONAL|Claim data|`["claim", <pubkey claiming it>:<bitcoin height when claimed>]`|
|SHOULD|Child status upon creation|`["child_status", <rfm \| open >]`|
|OPTIONAL|repository |`["repo", 30617:<pubkey>:<d-tag>]`|
|OPTIONAL|required skill, language, etc|`["skill", "golang"]` `["skill", "docker"]`|
|OPTIONAL|references to other problems |`["a", 31971:<pubkey>:<256bit hex>, "mention"]`|
|SHOULD|Pubkeys of maintainers, add a new tag for each, clients SHOULD copy the parent's list to begin with|`["maintainer", <pubkey>]`|
|SHOULD| Current block when publishing, mostly for convenience. | `[ "bitcoin", "<current bitcoin height>:<hash>" ]` |


Events published by maintainers and using the same `d` tag are considered as replacements (by the client, not relays) if they are newer.

Clients get maintainer lists from the event itself, if none are specified then they use the parent event list, the tagged rocket(s), tagged NIP34 repo, etc.

