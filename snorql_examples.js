////// Query examples クエリ例ポップアップ生成

//additional namespaces (not defined in namespaces.js) to use in examples as ns[] array which adds PREFIX clause
//クエリ例でns[]配列に指定することで追加のPREFIX句を加える
Snorqldef.example_ns = {
	"edm": "http://www.europeana.eu/schemas/edm/",
	"ore": "http://www.openarchives.org/ore/terms/",
	"wdt": "http://www.wikidata.org/prop/direct/",
	"crm": "http://www.cidoc-crm.org/cidoc-crm/",
	"pds": "http://purl.org/net/ns/policy#",
	"dct": "http://purl.org/dc/terms/",
	"dc": "http://purl.org/dc/elements/1.1/"
};

//list of example queries. each object represents one example: {label: Japanese label for select option, label_oth: English label for select option, ns: [prefixes to use in query], query: SPARQL query (escaped)}
//クエリ例を定義するオブジェクト
//mlabelは言語別ラベル。クエリフォームに説明コメントとしても表示する。複数の文（日本語なら「。」区切り）で構成されるラベルにすると、最初の区切り文字までを選択用ラベル、全体を説明コメントとして用いる
Snorqldef.example = [
	{
		"mlabel": [
			"「中村」をタイトルに含むアイテム", 
			"Example 1"
		],
		"query": 
`SELECT * WHERE {
	?cho rdfs:label ?label .
	?label bif:contains "'中村'"
}
`,
		"ns": ["edm"]
	}
];
