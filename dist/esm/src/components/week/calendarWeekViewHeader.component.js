import { Component, Input, Output, EventEmitter } from '@angular/core';
export var CalendarWeekViewHeaderComponent = (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayClicked = new EventEmitter();
        this.eventDropped = new EventEmitter();
    }
    CalendarWeekViewHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-week-view-header',
                    template: "\n    <template #defaultTemplate>\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          (click)=\"dayClicked.emit({date: day.date})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </template>\n    <template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngOutletContext]=\"{days: days, locale: locale, dayClicked: dayClicked, eventDropped: eventDropped}\">\n    </template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewHeaderComponent.ctorParameters = function () { return []; };
    CalendarWeekViewHeaderComponent.propDecorators = {
        'days': [{ type: Input },],
        'locale': [{ type: Input },],
        'customTemplate': [{ type: Input },],
        'dayClicked': [{ type: Output },],
        'eventDropped': [{ type: Output },],
    };
    return CalendarWeekViewHeaderComponent;
}());
//# sourceMappingURL=calendarWeekViewHeader.component.js.map