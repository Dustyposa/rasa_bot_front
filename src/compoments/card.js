import {Button, Card, CardActions} from "@chatui/core";
import React from "react";
import {CardButtonOnClick} from "../utils/handlers";

export default function buttonCard({data, ctx, meta}) {
	return <Card size="xl">
		<CardActions>
			{data.map((item, index) => {
				return <Button key={index} onClick={CardButtonOnClick(ctx)} value={item.payload}>{item.title}</Button>
			})}
		</CardActions>
	</Card>
}
